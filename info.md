# Project Summary: Creative Idea Generator

## Overview
This is a multilingual (Arabic/English) web application that generates creative ideas using AI (Gemini API). It provides various content generation categories including photographic images, ad images, short messages, articles, and videos.

## Key Features
- **Multilingual Support**: Arabic (default) and English language toggle
- **Content Categories**:
  - Photographic Images (with advanced filters)
  - Advertisement Images (for various product types)
  - Short Messages (different types and dialects)
  - Articles (various topics and lengths)
  - Videos (different genres)
- **AI Integration**: Uses Gemini 2.0 Flash API for content generation
- **Responsive Design**: Works on different screen sizes

## Technical Details
- **Frontend**:
  - HTML/CSS with Tailwind-like styling
  - JavaScript for dynamic content and API calls
  - Cairo font for Arabic, Roboto for English
- **State Management**:
  - Current language (ar/en)
  - Current category and subcategory
  - Various filter options depending on content type

## Files Structure
- `index.html`: Main application interface
- `logic.js`: Core application logic (1079 lines)
- `maincssfile.css`: Styling (152 lines)

## Recent Changes
- Added AI feature buttons (ad slogans, article subheadings, programming steps)
- Implemented advanced filters for photographic images
- Added input validation for message/article topics
- Improved UI animations and transitions

## Important Notes
- Requires Gemini API key for full functionality
- Contains forbidden keyword filtering for generated content
- Uses modern CSS features like transitions and animations

## Future Improvements
- Add more content categories
- Implement user accounts/saved ideas
- Add sharing functionality
- Expand filter options