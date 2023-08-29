import React from 'react';
import {styles} from '../styles/Global';
import {Text, View, Button, TextInput} from 'react-native';
import {Formik} from 'formik';
// import * as yub from 'yub';

// const ReviewSchema = yub.object({
//   name: yub.string().required().min(4),
//   body: yub.string().required().min(8),
//   rating: yub
//     .string()
//     .required()
//     .test('is-num', 'Rating must be a number 1-5', val => {
//       return parseInt(val) < 6 && parseInt(val) > 0;
//     }),
// });

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
        // validationSchema={ReviewSchema}
      >
        {/* render function will return JSX code , where we are going to use the javascript inside the curly bracket */}
        {/* access the function directly without the need to use the props is the other way to update the value entered by the user  */}

        {({handleChange, handleSubmit, values}) => (
          <View>
            <TextInput
              style={styles.Textinput}
              placeholder="Review Title"
              // by using the props provided by formik we will update the value of name with the user input
              onChangeText={handleChange('name')}
              value={values.name}
            />

            <TextInput
              multiline
              style={styles.Textinput}
              placeholder="Review Body"
              // by using the props provided by formik we will update the value of name with the user input
              onChangeText={handleChange('body')}
              value={values.body}
            />

            <TextInput
              style={styles.Textinput}
              placeholder="Rating (1-5)"
              // by using the props provided by formik we will update the value of name with the user input
              onChangeText={handleChange('rating')}
              value={values.rating}
              keyboardType="numeric"
            />

            <Button
              title="Submit"
              color="#e7305b"
              style={styles.button}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
