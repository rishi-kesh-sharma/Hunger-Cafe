import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import messageToast from "../../../utils/messageToast";
import axios from "axios";
import { API_PATHS } from "../../../utils/constants";

const CustomInput = ({ field, form, ...props }) => {
  return <Input {...field} {...props} />;
};

export default function PlaceOrder({ open, handleOpen }) {
  const handleSubmit = async (values) => {
    try {
      const res = axios.post(
        `${process.env.REACT_APP_API_URL}/${API_PATHS.ORDER}`,

        { ...values, type: "Delivery" },
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );

      console.log(res, "response");

      messageToast("success", "Message has Successfully been Sent!!!");
    } catch (err) {
      console.log(err);
      messageToast(
        "error",
        `${err.response.message || err.message || "Message  cannot be Sent!!!"}`
      );
    }
  };
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    type: "Delivery",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.string().required(),
    address: Yup.string().required(),
    type: Yup.string().optional(),
  });

  return (
    <>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none">
        <Card className="mx-auto w-full">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h6" color="blue-gray">
              Your Contact Info
            </Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}>
              <Form className="flex flex-col gap-6">
                <div className="">
                  <Field
                    label="Name"
                    size="lg"
                    component={CustomInput}
                    type="text"
                    id="name"
                    name="name"
                  />
                  <ErrorMessage
                    name="name"
                    className="text-[0.4rem] text-red-500 bg-red-300"
                    style={{ background: "red" }}>
                    {(msg) => (
                      <div className="text-red-500 text-sm mt-[0.3rem] ">
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </div>
                <div className="">
                  <Field
                    label="Email"
                    size="lg"
                    component={CustomInput}
                    type="text"
                    id="email"
                    name="email"
                  />
                  <ErrorMessage
                    name="email"
                    className="text-[0.4rem] text-red-500 bg-red-300"
                    style={{ background: "red" }}>
                    {(msg) => (
                      <div className="text-red-500 text-sm mt-[0.3rem] ">
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </div>
                <div className="">
                  <Field
                    label="Phone"
                    size="lg"
                    component={CustomInput}
                    type="text"
                    id="phone"
                    name="phone"
                  />
                  <ErrorMessage
                    name="phone"
                    className="text-[0.4rem] text-red-500 bg-red-300"
                    style={{ background: "red" }}>
                    {(msg) => (
                      <div className="text-red-500 text-sm mt-[0.3rem] ">
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </div>
                <div className="">
                  <Field
                    label="Address"
                    size="lg"
                    component={CustomInput}
                    id="address"
                    name="address"
                  />
                  <ErrorMessage
                    name="address"
                    className="text-[0.4rem] text-red-500 bg-red-300"
                    style={{ background: "red" }}>
                    {(msg) => (
                      <div className="text-red-500 text-sm mt-[0.3rem] ">
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </div>
                <CardFooter className="pt-0 px-0">
                  <Button type="submit" className="bg-primary px-0" fullWidth>
                    Place Order
                  </Button>
                </CardFooter>
              </Form>
            </Formik>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}
