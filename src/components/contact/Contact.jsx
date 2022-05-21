import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { Formik, Form } from "formik";
import {
    TextField,
    Button,
    Box,
    MenuItem,
    Grid,
    FormControl,
    InputLabel,
    Select,

} from "@material-ui/core";

import * as Yup from "yup";

const formValidationSchema = Yup.object().shape({
    fullName: Yup.string().min(2, "Min 2 char").max(50).required("Required"),
    email: Yup.string().min(2).max(100).required('Please enter Email').email('Please enter valid Email'),
    message: Yup.string().min(10, "Min 10 char").max(200).required('Required')
})

export const Contact = () => {

    const state = {
        inquiry: [
            { id: 1, name: "Hello" },
            { id: 2, name: "Hi" },
            { id: 3, name: "Nice to Meet you" },
            { id: 4, name: "Welcome" },

        ],
        formData: {
            inquiryId: "",
            fullName: "",
            email: "",
            message: "",

        }
    };

    const mapInquiry = (inquiry) => (
        <MenuItem key={`inquiry_${inquiry.id}`} value={inquiry.id}>{inquiry.name}</MenuItem>
    )

    const handleSubmit = (values) => {
        console.log(values)
    }


    return (
        <section id="contact">
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>changwoolee1994@gmail.com</h5>
                        <a href="mailto:changwoolee1994@gmail.com">Send an email</a>
                    </article>
                </div>

                <Formik
                    enableReinitialize={true}
                    initialValues={state.formData}
                    onSubmit={handleSubmit}
                    validationSchema={formValidationSchema}
                >
                    {({ values, handleChange, touched, errors }) => (
                        <Form>

                            <Box m={2} pt={3} style={{ margin: '10px' }}>
                                <FormControl fullWidth required>
                                    <InputLabel>Title</InputLabel>
                                    <Select name="inquiryId" value={values.inquiryId} onChange={handleChange}>
                                        {state.inquiry.map(mapInquiry)}
                                    </Select>
                                </FormControl>
                            </Box>
                            <Grid item xs={12}>
                                <Box style={{ margin: '10px' }}>
                                    <TextField
                                        fullWidth
                                        name="fullName"
                                        label="Full Name"
                                        value={values.fullName}
                                        onChange={handleChange}
                                        variant="outlined"
                                        error={touched.fullName && Boolean(errors.fullName)}
                                        helperText={touched.fullName && errors.fullName}
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                <Box style={{ margin: '10px' }}>
                                    <TextField
                                        fullWidth
                                        name="email"
                                        label="Email"
                                        value={values.email}
                                        onChange={handleChange}
                                        variant="outlined"
                                        error={touched.email && Boolean(errors.email)}
                                        helperText={touched.email && errors.email}
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                <Box style={{ margin: '10px' }}>
                                    <TextField
                                        fullWidth
                                        name="message"
                                        label="message"
                                        multiline minRows={6}
                                        value={values.message}
                                        onChange={handleChange}
                                        variant="outlined"
                                        error={touched.message && Boolean(errors.message)}
                                        helperText={touched.message && errors.message}
                                    />
                                </Box>
                            </Grid>
                            <Box>
                                <Button style={{ margin: '10px' }}
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default Contact