// import { useState, useContext } from 'react';
import styles from '../css/AddBlogForm.module.css'

const AddBlogForm = () => {
  return (
    <div className={styles.AddBlogForm}>
      <h1>This is a page to write and add a blog</h1>
      <form>
        Name: <input type="text" name="author"/>
        <input type="submit"/>
      </form>
      <textarea name="blog" cols="30" rows="10">Write your blog here....</textarea>
    </div>
  );
}

export default AddBlogForm;