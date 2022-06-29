import { useMutation } from '@apollo/client';
import React, { useEffect, useRef, useState } from 'react';
import { UPLOAD_FILE } from '../api/mutations/Upload';

const Test = () => {
  // const [doUpload] = useMutation(UPLOAD_FILE, {
  //   onCompleted: (data) => console.log(data)
  // });

  // const handleFileChange = (e: any) => {
  //   const file = e.target.files[0];
  //   if (!file) return;

  //   doUpload({
  //     variables: { file, projectId: 1 }
  //   });
  // };

  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);

  //add ingredients
  // const handleAdd = (e: React.FormEvent<EventTarget>) => {
  //   e.preventDefault();
  //   const ing = newIngredient.trim() as string;
  //   if (ing && !ingredients.includes(ing)) {
  //     setIngredients((prevIngredients) => [...prevIngredients, ing]);
  //   }
  //   setNewIngredient('');
  //   ingredientInput.current.focus(); //input will b focus once ing is added automaticly
  // };

  useEffect(() => {
    console.log(typeof newIngredient);
  }, [newIngredient]);

  return (
    <div className="p-4">
      Test
      {/* <input type="file" onChange={handleFileChange} /> */}
      <label>
        <span>Recipe ingredients :</span>
        <div className="ingredients">
          <input
            type="text"
            onChange={(e) => setNewIngredient(e.target.value)}
            value={newIngredient}
            ref={ingredientInput}
          />
          {/* <button onClick={handleAdd} className="btn">
            add
          </button> */}
        </div>
      </label>
    </div>
  );
};

export default Test;
