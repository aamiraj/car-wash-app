import { message, Modal, Typography } from "antd";
import { useDeleteServiceMutation } from "../../../redux/api/serviceApi";

interface AppModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  id: string | null;
}

const DeleteServiceModal = ({ isOpen, setIsOpen, id }: AppModalProps) => {
  const [deleteService] = useDeleteServiceMutation();
  const [messageApi, contextHolder] = message.useMessage();

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleDelete = async (id: string | null) => {
    try {
      messageApi.open({
        type: "loading",
        content: "Deleting service...",
        duration: 0,
        key: "LOADING",
      });

      await deleteService(id).unwrap();

      messageApi.destroy("LOADING");
      messageApi.open({
        type: "success",
        content: "Successfully deleted the service.",
        key: "SUCCESS",
      });

      setIsOpen(false);
    } catch (error: any) {
      messageApi.destroy("LOADING");
      messageApi.open({
        type: "error",
        content: "Service deletion failed.",
        key: "ERROR",
      });
    }
  };
  return (
    <>
      {contextHolder}
      <Modal
        title="Delete Service"
        open={isOpen}
        onCancel={handleCancel}
        onOk={() => handleDelete(id)}
        okText="Delete"
        cancelText="Cancel"
        okButtonProps={{ autoFocus: true, htmlType: "button" }}
      >
        <Typography.Title level={4}>
          Are you sure you want to delete this service?
        </Typography.Title>
      </Modal>
    </>
  );
};

export default DeleteServiceModal;
