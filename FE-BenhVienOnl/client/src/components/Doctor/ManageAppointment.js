import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, message, Space } from 'antd';
import { useGetDoctorAppointmentsQuery, useCancelAppointmentMutation, useRescheduleAppointmentMutation, useUpdateAppointmentStatusMutation } from '../../Redux/Doctor/api';

const ManageAppointment = () => {
  const { data, isLoading } = useGetDoctorAppointmentsQuery();
  const [cancelAppointment] = useCancelAppointmentMutation();
  const [rescheduleAppointment] = useRescheduleAppointmentMutation();
  const [updateAppointmentStatus] = useUpdateAppointmentStatusMutation();
  
  const [appointmentsList, setAppointmentsList] = useState([]);
  const [rescheduleModalVisible, setRescheduleModalVisible] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [newDate, setNewDate] = useState('');

  useEffect(() => {
    if (data?.appointments) setAppointmentsList(data.appointments);
  }, [data]);

  const handleCancelAppointment = async (appointmentId) => {
    try {
      await cancelAppointment(appointmentId).unwrap();
      message.success("Appointment cancelled successfully");
      setAppointmentsList(prev => prev.filter(appointment => appointment._id !== appointmentId));
    } catch (error) {
      message.error("Failed to cancel appointment");
    }
  };

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      await updateAppointmentStatus({ appointmentId, status }).unwrap();
      message.success("Status updated successfully");
      setAppointmentsList(prev =>
        prev.map(appointment =>
          appointment._id === appointmentId ? { ...appointment, status } : appointment
        )
      );
    } catch (error) {
      message.error("Failed to update status");
    }
  };

  const handleReschedule = async () => {
    if (!newDate) {
      message.warning("Please select a new date for rescheduling.");
      return;
    }
    try {
      await rescheduleAppointment({ appointmentId: selectedAppointment, newDate }).unwrap();
      message.success("Appointment rescheduled successfully");
      setAppointmentsList(prev =>
        prev.map(appointment =>
          appointment._id === selectedAppointment ? { ...appointment, date: newDate } : appointment
        )
      );
      setRescheduleModalVisible(false);
      setNewDate('');
    } catch (error) {
      message.error("Failed to reschedule appointment");
    }
  };

  const columns = [
    {
      title: 'Patient Name',
      dataIndex: ['patient', 'fullName'],
      key: 'patientName',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleUpdateStatus(record._id, 'Completed')}>Mark as Completed</Button>
          <Button type="danger" onClick={() => handleCancelAppointment(record._id)}>Cancel</Button>
          <Button type="default" onClick={() => { setSelectedAppointment(record._id); setRescheduleModalVisible(true); }}>Reschedule</Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    if (appointmentsList.length === 0 && !isLoading) {
      message.info("No appointments found.");
    }
  }, [appointmentsList, isLoading]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Manage Appointments</h2>
      <Table 
        dataSource={appointmentsList} 
        columns={columns} 
        loading={isLoading} 
        rowKey={(record) => record._id} 
        pagination={{ pageSize: 5 }} 
        className="bg-white shadow-lg rounded-lg" 
      />

      {/* Modal for Rescheduling */}
      <Modal
        title="Reschedule Appointment"
        visible={rescheduleModalVisible}
        onOk={handleReschedule}
        onCancel={() => setRescheduleModalVisible(false)}
      >
        <input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        />
      </Modal>
    </div>
  );
};

export default ManageAppointment;
