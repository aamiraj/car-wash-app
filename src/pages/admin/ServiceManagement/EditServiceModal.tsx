import { Form, Input, InputNumber, message, Modal, Skeleton } from "antd";
import {
  useGetAServiceQuery,
  useUpdateServiceMutation,
} from "../../../redux/api/serviceApi";

interface AppModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  id: string | null;
}

interface FormValues {
  name: string;
  description: string;
  price: number;
  duration: number;
}

const EditServiceModal = ({ isOpen, setIsOpen, id }: AppModalProps) => {
  const [form] = Form.useForm();
  const { data: serviceData, isFetching } = useGetAServiceQuery(id, {
    skip: !id,
  });
  const [updateService] = useUpdateServiceMutation();
  const [messageApi, contextHolder] = message.useMessage();

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onCreate = async (values: FormValues) => {
    try {
      messageApi.open({
        type: "loading",
        content: "Updating service...",
        duration: 0,
        key: "LOADING",
      });

      await updateService({ id, data: values }).unwrap();

      messageApi.destroy("LOADING");
      messageApi.open({
        type: "success",
        content: "Successfully updated the service.",
        key: "SUCCESS",
      });
      setIsOpen(false);
    } catch (error: any) {
      messageApi.destroy("LOADING");
      messageApi.open({
        type: "error",
        content: "Service update failed.",
        key: "ERROR",
      });
    }
  };
  return (
    <>
      {contextHolder}
      <Modal
        title="Edit Service"
        open={isOpen}
        onCancel={handleCancel}
        okText="Update"
        cancelText="Cancel"
        okButtonProps={{ autoFocus: true, htmlType: "submit" }}
        destroyOnClose
        modalRender={(dom) => (
          <Form
            layout="vertical"
            form={form}
            name="update_service_form"
            clearOnDestroy
            onFinish={(values) => onCreate(values)}
          >
            {dom}
          </Form>
        )}
      >
        {isFetching ? (
          <Skeleton paragraph={{ rows: 5 }} />
        ) : (
          <>
            <Form.Item
              name="name"
              label="Service Name"
              initialValue={serviceData?.data?.name}
              rules={[
                { required: true, message: "Please input the service name." },
              ]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              initialValue={serviceData?.data?.description}
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
              initialValue={serviceData?.data?.price}
              rules={[
                {
                  required: true,
                  message: "Please input the service price.",
                },
              ]}
            >
              <InputNumber min={0} addonBefore="$" />
            </Form.Item>
            <Form.Item
              name="duration"
              label="Duration"
              initialValue={serviceData?.data?.duration}
              rules={[
                {
                  required: true,
                  message: "Please input the service duration.",
                },
              ]}
            >
              <InputNumber addonAfter={"min"} min={0} />
            </Form.Item>
          </>
        )}
      </Modal>
    </>
  );
};

export default EditServiceModal;
