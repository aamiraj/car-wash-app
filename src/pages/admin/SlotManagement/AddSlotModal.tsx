import {
  DatePicker,
  DatePickerProps,
  Form,
  message,
  Modal,
  Select,
  TimePicker,
  TimePickerProps,
} from "antd";
import { useGetAllServicesQuery } from "../../../redux/api/serviceApi";
import { useAddASlotMutation } from "../../../redux/api/slotApi";
import { useState } from "react";

const format = "HH:mm";

interface AppModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

interface FormValues {
  service: string;
}

const AddSlotModal = ({ isOpen, setIsOpen }: AppModalProps) => {
  const [form] = Form.useForm();
  const [date, setDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [addSlot] = useAddASlotMutation();
  const { data, isFetching } = useGetAllServicesQuery({
    searchTerm: "",
    sort: "",
  });
  const [messageApi, contextHolder] = message.useMessage();

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onDateChange: DatePickerProps["onChange"] = (_date, dateString) => {
    // console.log(date, dateString);
    setDate(dateString as string);
  };

  const onStartTimeChange: TimePickerProps["onChange"] = (
    _time,
    timeString
  ) => {
    // console.log(time, timeString);
    setStartTime(timeString as string);
  };

  const onEndTimeChange: TimePickerProps["onChange"] = (_time, timeString) => {
    // console.log(time, timeString);
    setEndTime(timeString as string);
  };

  const onCreate = async (values: FormValues) => {
    try {
      const slotData = {
        service: values?.service,
        date: date,
        startTime: startTime,
        endTime: endTime,
      };
      // console.log(slotData);

      messageApi.open({
        type: "loading",
        content: "Adding slot...",
        duration: 0,
        key: "LOADING",
      });

      await addSlot(slotData).unwrap();

      messageApi.destroy("LOADING");
      messageApi.open({
        type: "success",
        content: "Successfully added the slot.",
        key: "SUCCESS",
      });
      setIsOpen(false);
    } catch (error: any) {
      messageApi.destroy("LOADING");
      messageApi.open({
        type: "error",
        content: "Slot added failed.",
        key: "ERROR",
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Modal
        title="Add A Slot"
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
            name="add_slot_form"
            clearOnDestroy
            onFinish={(values) => onCreate(values)}
          >
            {dom}
          </Form>
        )}
      >
        <Form.Item
          name="service"
          label="Select a service"
          rules={[{ required: true, message: "Please input the slot name." }]}
        >
          <Select
            placeholder="Select a service"
            options={data?.data?.map((item: any) => ({
              value: item?._id,
              label: item?.name,
            }))}
            loading={isFetching}
          />
        </Form.Item>
        <Form.Item
          name="date"
          label="Select a date"
          rules={[
            {
              required: true,
              message: "Please input the date.",
            },
          ]}
        >
          <DatePicker onChange={onDateChange} />
        </Form.Item>
        <Form.Item
          name="startTime"
          label="Start Time"
          rules={[{ required: true, message: "Please input the start time." }]}
        >
          <TimePicker onChange={onStartTimeChange} format={format} />
        </Form.Item>
        <Form.Item
          name="endTime"
          label="End Time"
          rules={[{ required: true, message: "Please input the end time." }]}
        >
          <TimePicker onChange={onEndTimeChange} format={format} />
        </Form.Item>
      </Modal>
    </>
  );
};

export default AddSlotModal;
