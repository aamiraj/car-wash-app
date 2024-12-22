import { Form, Input, InputNumber, message, Modal } from "antd";
import { useAddAServiceMutation } from "../../../redux/api/serviceApi";

interface AppModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

interface FormValues {
  name: string;
  description: string;
  price: number;
  duration: number;
}

const AddServiceModal = ({ isOpen, setIsOpen }: AppModalProps) => {
  const [form] = Form.useForm();
  const [addService] = useAddAServiceMutation();
  const [messageApi, contextHolder] = message.useMessage();

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onCreate = async (values: FormValues) => {
    try {
      const serviceData = {
        name: values?.name,
        description: values?.description,
        price: values?.price,
        duration: values?.duration,
      };
      // console.log(serviceData);

      messageApi.open({
        type: "loading",
        content: "Adding service...",
        duration: 0,
        key: "LOADING",
      });

      await addService(serviceData).unwrap();

      messageApi.destroy("LOADING");
      messageApi.open({
        type: "success",
        content: "Successfully added the service.",
        key: "SUCCESS",
      });
      setIsOpen(false);
    } catch (error: any) {
      messageApi.destroy("LOADING");
      messageApi.open({
        type: "error",
        content: "Service added failed.",
        key: "ERROR",
      });
    }
  };
  return (
    <>
      {contextHolder}
      <Modal
        title="Add Service"
        open={isOpen}
        onCancel={handleCancel}
        okText="Create"
        cancelText="Cancel"
        okButtonProps={{ autoFocus: true, htmlType: "submit" }}
        destroyOnClose
        modalRender={(dom) => (
          <Form
            layout="vertical"
            form={form}
            name="add_service_form"
            clearOnDestroy
            onFinish={(values) => onCreate(values)}
          >
            {dom}
          </Form>
        )}
      >
        <Form.Item
          name="name"
          label="Service Name"
          rules={[
            { required: true, message: "Please input the service name." },
          ]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please input the service description.",
            },
          ]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[
            { required: true, message: "Please input the service price." },
          ]}
        >
          <InputNumber min={0} addonBefore="$" />
        </Form.Item>
        <Form.Item
          name="duration"
          label="Duration"
          rules={[
            { required: true, message: "Please input the service duration." },
          ]}
        >
          <InputNumber addonAfter={"min"} min={0} />
        </Form.Item>
      </Modal>
    </>
  );
};

export default AddServiceModal;
