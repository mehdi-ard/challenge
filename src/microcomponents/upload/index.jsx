import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import style from './style';

registerPlugin(
  FilePondPluginImageCrop,
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview
);

function Uploader({
  server,
  maxFiles = 1,
  allowMultiple = false,
  files,
  onupdatefiles,
  classes,
  children,
}) {
  return (
    <FilePond
      allowImageCrop={true}
      imageCropAspectRatio="3:2"
      files={files}
      className={classes.root}
      allowMultiple={allowMultiple}
      maxFiles={maxFiles}
      server={server}
      oninit={() => {}}
      onupdatefiles={onupdatefiles}
      labelIdle={ReactDOMServer.renderToString(children)}
      labelFileProcessingComplete="با موفقیت بارگذاری شد"
      labelFileProcessing="درحال بارگذاری"
      labelFileProcessingAborted="بارگذاری متوقف شد"
      labelFileProcessingError="بارگذاری با خطا مواجه شد"
      labelTapToCancel="لغو کنید"
      labelTapToUndo="برای لغو کلیک کنید"
    />
  );
}

export default style(Uploader);
