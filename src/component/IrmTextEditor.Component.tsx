import dynamic from "next/dynamic";
import { useMemo, useRef, useState } from "react";

interface IrmTextEditorProps {
  placeholder?: string;
  height?: string;
  theme?: "dark" | "light" | undefined;
  onSave?: (content: string) => void;
  onCancel?: () => void;
}

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const IrmTextEditor: React.FC<IrmTextEditorProps> = ({
  placeholder,
  height = "300px",
  theme,
  onSave,
  onCancel,
}) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typing...",
      showCharsCounter: false,
      showWordsCounter: false,
      showXPathInStatusbar: false,
      showPoweredBy: false,
      height: height || "400px",
      theme: theme || "light",
    //   width: '120%',
      uploader: {
        insertImageAsBase64URI: true,
      },
      buttons: [
        'bold', 'italic', 'underline', '|', 'strikethrough', '|',
        'ul', 'ol', '|',
        'font', 'fontsize', 'paragraph', 'lineHeight', '|',
        'superscript', 'subscript', '|',
        'file', 'image', 'video', '|',
        'spellcheck', 'find', '|',
        'left', 'indent', 'outdent', '|',
        'selectall', 'copyformat', '|',
        'hr', 'table', '|',
        'link', 'symbols', '|',
        'brush', '|',
        'undo', 'redo', 'eraser', '|',
        'fullsize', 'preview'
      ]
    }),
    [placeholder, height]
  );

  const handleSave = () => {
    if (onSave) {
      onSave(content);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div style={{ padding: '0 50px' }}>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent: string) => setContent(newContent)}
        onChange={(newContent: string) => setContent(newContent)}
      />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', marginTop: '10px' }}>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default IrmTextEditor;
