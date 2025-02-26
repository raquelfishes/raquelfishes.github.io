// Define icons per type.
export const getIcon = (type) => {
    switch (type) {
      case 'book':
        return 'uil:book-open';
      case 'quote':
        return 'uil:comment-dots';
      case 'article':
        return 'uil:newspaper';
      case 'movie':
        return 'uil:film';
      case 'concept':
        return 'uil:lightbulb-alt';
      case 'image':
          return 'uil:camera';
      case 'podcast':
          return 'uil:microphone';
      case 'music':
          return 'uil:music';
      case 'person':
          return 'uil:user';
      case 'tv-series':
          return 'uil:tv-retro';
      default:
        return 'uil:question-circle'; // Default icon
    }
  };
      
export const getColor = (type) => {
    switch (type) {
      case 'book':
        return "#c084fc";
      case 'quote':
        return "#f472b6";
      case 'article':
        return "#fb7185";
      case 'movie':
        return "#e879f9";
      case 'concept':
        return "#a78bfa";
      case 'image':
          return "#818cf8";
      case 'podcast':
          return "#60a5fa";
      case 'music':
          return "#38bdf8";
      case 'person':
          return "#22d3ee";
      case 'tv-series':
          return '#2dd4bf';
      default:
        return "#ffffff";
    }
  };