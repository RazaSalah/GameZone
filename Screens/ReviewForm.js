import React from 'react';
import {styles} from '../styles/Global';
import FlatButton from '../Shared/FlatButton';
import {Text, View, TextInput} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

const ReviewSchema = yup.object().shape({
  name: yup.string().required().min(4, 'should be more than 4 characters'),
  body: yup.string().required().min(8, 'should be more than 8 characters'),
  rating: yup
    .string()
    .required()
    .test('is-num', 'Rating must be a number 1-5', val => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({AddReview}) {
  //   const Formik = useFormik({
  //     initialValues: {
  //       title: '',
  //       body: '',
  //       rating: '',
  //     },
  //     onSubmit: values => {},
  //   });
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: '',
          body: '',
          rating: '',
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
          AddReview(values);
        }}
        validationSchema={ReviewSchema}>
        {/* render function will return JSX code , where we are going to use the javascript inside the curly bracket */}
        {/* access the function directly without the need to use the props is the other way to update the value entered by the user  */}

        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          handleBlur,
        }) => (
          <View>
            <TextInput
              style={styles.Textinput}
              placeholder="Review Title"
              // by using the props provided by formik we will update the value of name with the user input
              onChangeText={handleChange('name')}
              value={values.name}
              onBlur={handleBlur('name')}
            />
            {/* if we are going to use the tuched we need to onblur in order to show the error message */}
            <Text style={styles.errorText}> {touched.name && errors.name}</Text>

            <TextInput
              multiline
              style={styles.Textinput}
              placeholder="Review Body"
              // by using the props provided by formik we will update the value of name with the user input
              onChangeText={handleChange('body')}
              value={values.body}
              onBlur={handleBlur('body')}
            />

            <Text style={styles.errorText}> {touched.body && errors.body}</Text>

            <TextInput
              style={styles.Textinput}
              placeholder="Rating (1-5)"
              // by using the props provided by formik we will update the value of name with the user input
              onChangeText={handleChange('rating')}
              value={values.rating}
              keyboardType="numeric"
              onBlur={handleBlur('rating')}
            />

            <Text style={styles.errorText}>
              {' '}
              {touched.rating && errors.rating}
            </Text>

            <FlatButton text="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
