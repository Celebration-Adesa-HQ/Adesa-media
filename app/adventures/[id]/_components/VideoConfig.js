export const normalizeVideos = (urls = []) => {
  return urls.map((url) => getVideoSource(url)).filter(Boolean);
};
export const getVideoSource = (url) => {
  if (!url) return null;

  // Local / public folder
  if (url.startsWith("/")) {
    return {
      type: "video",
      src: url,
    };
  }

  // Google Drive
  const driveMatch = url.match(/\/d\/(.*?)\//);
  if (driveMatch) {
    return {
      type: "iframe",
      src: `https://drive.google.com/file/d/${driveMatch[1]}/preview`,
    };
  }

  // YouTube
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/);
  if (ytMatch) {
    return {
      type: "iframe",
      src: `https://www.youtube.com/embed/${ytMatch[1]}`,
    };
  }

  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    return {
      type: "iframe",
      src: `https://player.vimeo.com/video/${vimeoMatch[1]}`,
    };
  }

  // Direct files
  if (url.match(/\.(mp4|webm|ogg|mov|mkv)(\?.*)?$/i)) {
    return {
      type: "video",
      src: url,
    };
  }

  // Fallback
  return {
    type: "iframe",
    src: url,
  };
};


