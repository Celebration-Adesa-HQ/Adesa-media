export const getDocType = (url) => {
  if (!url) return "file";

  const lower = url.toLowerCase();

  /* Google Workspace */
  if (lower.includes("docs.google.com/spreadsheets")) return "google-sheet";
  if (lower.includes("docs.google.com/document")) return "google-doc";
  if (lower.includes("docs.google.com/presentation")) return "google-slide";
  if (lower.includes("drive.google.com")) return "google-drive";

  /* PDF */
  if (lower.endsWith(".pdf")) return "pdf";

  /* Microsoft Office */
  if (lower.endsWith(".docx") || lower.endsWith(".doc")) return "word";
  if (lower.endsWith(".xlsx") || lower.endsWith(".xls")) return "excel";
  if (lower.endsWith(".pptx") || lower.endsWith(".ppt")) return "powerpoint";

  /* OpenOffice / LibreOffice */
  if (lower.endsWith(".odt")) return "odt";
  if (lower.endsWith(".ods")) return "ods";
  if (lower.endsWith(".odp")) return "odp";

  /* Text */
  if (lower.endsWith(".txt")) return "text";
  if (lower.endsWith(".md")) return "markdown";
  if (lower.endsWith(".rtf")) return "rtf";
  if (lower.endsWith(".csv")) return "csv";

  /* Archives */
  if (lower.endsWith(".zip")) return "zip";
  if (lower.endsWith(".rar")) return "rar";
  if (lower.endsWith(".7z")) return "7z";
  if (lower.endsWith(".tar")) return "tar";
  if (lower.endsWith(".gz")) return "gzip";

  /* Images */
  if (
    lower.endsWith(".jpg") ||
    lower.endsWith(".jpeg") ||
    lower.endsWith(".png") ||
    lower.endsWith(".webp") ||
    lower.endsWith(".svg")
  )
    return "image";

  /* Audio */
  if (
    lower.endsWith(".mp3") ||
    lower.endsWith(".wav") ||
    lower.endsWith(".ogg")
  )
    return "audio";

  /* Video */
  if (
    lower.endsWith(".mp4") ||
    lower.endsWith(".webm") ||
    lower.endsWith(".mov")
  )
    return "video";

  /* Code / Dev */
  if (
    lower.endsWith(".json") ||
    lower.endsWith(".js") ||
    lower.endsWith(".ts") ||
    lower.endsWith(".html") ||
    lower.endsWith(".css")
  )
    return "code";

  return "file";
};

export const getDocLabel = (type) => {
  switch (type) {
    /* Google */
    case "google-sheet":
      return "Google Sheet";
    case "google-doc":
      return "Google Doc";
    case "google-slide":
      return "Google Slides";
    case "google-drive":
      return "Google Drive File";

    /* Office */
    case "pdf":
      return "PDF Document";
    case "word":
      return "Word Document";
    case "excel":
      return "Excel File";
    case "powerpoint":
      return "PowerPoint File";

    /* OpenOffice */
    case "odt":
      return "OpenDocument Text";
    case "ods":
      return "OpenDocument Sheet";
    case "odp":
      return "OpenDocument Presentation";

    /* Text */
    case "text":
      return "Text File";
    case "markdown":
      return "Markdown File";
    case "rtf":
      return "Rich Text File";
    case "csv":
      return "CSV File";

    /* Archives */
    case "zip":
      return "ZIP Archive";
    case "rar":
      return "RAR Archive";
    case "7z":
      return "7Z Archive";
    case "tar":
      return "TAR Archive";
    case "gzip":
      return "GZIP Archive";

    /* Media */
    case "image":
      return "Image File";
    case "audio":
      return "Audio File";
    case "video":
      return "Video File";

    /* Dev */
    case "code":
      return "Source File";

    default:
      return "File";
  }
};

export const isViewable = (type) => {
  return [
    /* Browser-native */
    "pdf",
    "image",
    "audio",
    "video",
    "text",
    "markdown",

    /* Google */
    "google-sheet",
    "google-doc",
    "google-slide",
    "google-drive",

    /* Data */
    "csv",
  ].includes(type);
};

