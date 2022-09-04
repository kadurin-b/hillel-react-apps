import { useState } from "react";

export default function Sticker({ sticker, onDelete, onSave }) {
  const [description, setDescription] = useState(sticker.description);

  function onInputChange(e) {
    setDescription(e.target.value);
  }

  function saveSticker() {
    onSave({ ...sticker, description });
  }

  return (
    <div className="sticker-item">
        <button className="delete-btn" onClick={onDelete.bind(null, sticker)}>
          x
        </button>
      <div>
        <textarea
          name="description"
          className="sticker-input"
          value={description}
          onChange={onInputChange}
          onBlur={saveSticker}
        ></textarea>
      </div>
    </div>
  );
}


