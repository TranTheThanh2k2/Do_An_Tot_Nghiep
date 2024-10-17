import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDoctors, createDoctor } from '../../Redux/User/userSlice'; // Import async thunk để lấy và tạo bác sĩ
import { Table, Button, Space, Drawer, Form, Input, Select, DatePicker, message } from 'antd';

const ManageDoctor = () => {
  const dispatch = useDispatch();
  
  // Lấy dữ liệu bác sĩ từ Redux store
  const { doctors, loading, error } = useSelector((state) => state.user);
  
  const [isDrawerVisible, setIsDrawerVisible] = useState(false); // Trạng thái để mở Drawer
  const [form] = Form.useForm(); // Form từ Ant Design

  // Gọi API lấy danh sách bác sĩ khi component mount
  useEffect(() => {
    dispatch(getAllDoctors());
  }, [dispatch]);

  // Xử lý khi người dùng nhấn nút "Tạo Bác Sĩ"
  const handleCreateDoctor = () => {
    form.validateFields().then(values => {
      // Kiểm tra dữ liệu form
      console.log(values);

      // Chuyển ngày sinh sang định dạng mong muốn
      const formattedValues = {
        ...values,
        dateOfBirth: values.dateOfBirth.format('YYYY-MM-DD'),
      };

      dispatch(createDoctor(formattedValues))
        .unwrap()
        .then(() => {
          message.success('Tạo bác sĩ thành công!');
          setIsDrawerVisible(false);
          form.resetFields(); // Reset form sau khi tạo bác sĩ thành công
          dispatch(getAllDoctors()); // Cập nhật lại danh sách bác sĩ sau khi tạo
        })
        .catch(() => {
          message.error('Có lỗi xảy ra khi tạo bác sĩ.');
        });
    });
  };

  // Cột hiển thị thông tin bác sĩ
  const columns = [
    {
      title: 'Họ Tên',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Số Điện Thoại',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Chuyên Khoa',
      dataIndex: 'specialty',
      key: 'specialty',
    },
    {
      title: 'Giới Tính',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Ngày Sinh',
      dataIndex: 'dateOfBirth',
      key: 'dateOfBirth',
      render: (text) => new Date(text).toLocaleDateString(),
    },
    {
      title: 'Địa Chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Hành Động',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary">Sửa</Button>
          <Button type="danger">Xóa</Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1>Quản Lý Bác Sĩ</h1>

      {/* Nút mở Drawer để tạo bác sĩ luôn hiển thị */}
      <Button type="primary" onClick={() => setIsDrawerVisible(true)}>
        Tạo Bác Sĩ
      </Button>

      {/* Kiểm tra nếu đang tải hoặc có lỗi */}
      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : error ? (
        <p>Có lỗi xảy ra: {error}</p>
      ) : doctors && doctors.length === 0 ? (
        <p>Hiện tại không có bác sĩ nào. Bạn có thể tạo mới.</p>
      ) : (
        // Hiển thị bảng nếu có dữ liệu bác sĩ
        <Table columns={columns} dataSource={doctors} rowKey="id" />
      )}

      {/* Drawer tạo bác sĩ */}
      <Drawer
        title="Tạo Bác Sĩ Mới"
        width={720}
        onClose={() => setIsDrawerVisible(false)}
        open={isDrawerVisible}  // Điều kiện mở Drawer
        footer={
          <div style={{ textAlign: 'right' }}>
            <Button onClick={() => setIsDrawerVisible(false)} style={{ marginRight: 8 }}>
              Hủy
            </Button>
            <Button onClick={handleCreateDoctor} type="primary">
              Tạo
            </Button>
          </div>
        }
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="username"
            label="Tên đăng nhập"
            rules={[{ required: true, message: 'Hãy nhập tên đăng nhập!' }]}
          >
            <Input placeholder="Nhập tên đăng nhập" />
          </Form.Item>
          
          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[{ required: true, message: 'Hãy nhập mật khẩu!' }]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>

          <Form.Item
            name="fullName"
            label="Họ Tên"
            rules={[{ required: true, message: 'Hãy nhập họ tên bác sĩ!' }]}
          >
            <Input placeholder="Nhập họ tên" />
          </Form.Item>
          
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Hãy nhập email bác sĩ!' }]}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Số Điện Thoại"
            rules={[{ required: true, message: 'Hãy nhập số điện thoại!' }]}
          >
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Giới Tính"
            rules={[{ required: true, message: 'Hãy chọn giới tính!' }]}
          >
            <Select placeholder="Chọn giới tính">
              <Select.Option value="male">Nam</Select.Option>
              <Select.Option value="female">Nữ</Select.Option>
              <Select.Option value="other">Khác</Select.Option>
            </Select>
          </Form.Item>
          
          <Form.Item
            name="dateOfBirth"
            label="Ngày Sinh"
            rules={[{ required: true, message: 'Hãy nhập ngày sinh!' }]}
          >
            <DatePicker placeholder="Chọn ngày sinh" format="DD/MM/YYYY" />
          </Form.Item>

          <Form.Item
            name="address"
            label="Địa Chỉ"
            rules={[{ required: true, message: 'Hãy nhập địa chỉ!' }]}
          >
            <Input placeholder="Nhập địa chỉ" />
          </Form.Item>

          <Form.Item
            name="specialty"
            label="Chuyên Khoa"
            rules={[{ required: true, message: 'Hãy nhập chuyên khoa!' }]}
          >
            <Input placeholder="Nhập chuyên khoa" />
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default ManageDoctor;
