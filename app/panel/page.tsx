'use client'
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import List from "./components/List";
import ClearButton from "./components/ClearButton";
import EmptyMessage from "./components/EmptyMessage";

const schema = Yup.object().shape({
  task: Yup.string().min(10, "Minimo 10 caracteres").required("No puede quedar vacio"),
})

export default function Taks() {

  const [list, setList] = useState<string[]>([]);

  return (
    <div>

      <div className="w-2/4 flex flex-col m-auto">
        <h2 className="text-4xl uppercase text-center mt-5">Tasks</h2>

        <Formik
          initialValues={{ task: "" }}
          validationSchema={schema}
          onSubmit={(values, actions) => {
            setList([...list, values.task]);
            actions.resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex gap-4 mt-5">
              <div className="grow">
                <Field name="task" type="text" className="text-black rounded h-[40px] w-full outline-none px-2" />
                {
                  errors.task && touched.task && <div className="text-red-500">{errors.task}</div>
                }
              </div>
              <button type="submit" className="bg-red-400 w-[110px] rounded h-[40px]">Add</button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="w-2/4 m-auto flex flex-col gap-5 mt-5">
        <List tasks={list} />
        {list.length > 0 && <ClearButton resetList={() => setList([])} />}
      </div>

      {
        !list.length && <EmptyMessage message="No hay tareas" />}
    </div>
  )
}
