import Sticker from "./Sticker";

export default function StickersList({ stickers, onDelete, onSave }) {
  return (
    <div className="sticker-desk">
      {stickers.map((item) => (
        <Sticker
          key={item.id}
          sticker={item}
          onDelete={onDelete}
          onSave={onSave}
        />
      ))}
    </div>
  );
}

