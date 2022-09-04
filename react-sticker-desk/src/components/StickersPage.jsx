
import useStickers from "../hooks/useStickers";
import StickersList from "./StickersList";

export default function StickerPage() {
  const { stickers, addSticker, deleteSticker, updateSticker } = useStickers();

  function addNewSticker() {
    addSticker();
  }
  function onDeleteSticker(sticker) {
    deleteSticker(sticker.id);
  }
  function saveSticker(sticker) {
    updateSticker(sticker);
  }
  return (
    <>
      <div className="container">
        <button className="add-btn" onClick={addNewSticker}>
          Add new stiker
        </button>
        <StickersList
          stickers={stickers}
          onDelete={onDeleteSticker}
          onSave={saveSticker}
        />
      </div>
    </>
  );
}
