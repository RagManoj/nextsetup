import dynamic from "next/dynamic";
import { useMemo, useRef, useEffect } from "react";

interface IrmTextEditorProps {
  placeholder?: string;
  height?: string;
  theme?: "dark" | "light" | undefined;
  value: string;
  onChange?: (content: string) => void;
}

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const IrmTextEditor: React.FC<IrmTextEditorProps> = ({
  placeholder,
  height = "300px",
  theme,
  value,
  onChange,
}) => {
  const editor = useRef<any>(null);

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

  useEffect(() => {
    if (editor.current && value !== undefined) {
      editor.current.value = value;
    }
  }, [value]);

  return (
    <div style={{ padding: '0 50px' }}>
      <JoditEditor
        ref={editor}
        value={value}
        config={config}
        onBlur={(newContent: string) => onChange && onChange(newContent)}
        onChange={(newContent: string) => onChange && onChange(newContent)}
      />
    </div>
  );
};

export default IrmTextEditor;
