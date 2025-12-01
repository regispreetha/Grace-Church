# YouTube Integration Guide

This guide will help you add your actual sermon videos from your YouTube channel to the website.

## Your YouTube Channel
https://youtube.com/@gracecovenantchurchsydney

## How to Add YouTube Videos to Your Sermons

### Step 1: Get YouTube Video URLs

1. Go to your YouTube channel: https://youtube.com/@gracecovenantchurchsydney
2. Click on a video you want to add to your website
3. Copy the URL from the browser address bar
   - It will look like: `https://www.youtube.com/watch?v=VIDEO_ID`
   - Or the short form: `https://youtu.be/VIDEO_ID`

### Step 2: Update the Sermon Data

Open the file `data/mockData.ts` and find the `sermons` array.

For each sermon, update the following fields:

```typescript
{
  id: '1',                    // Unique ID for each sermon
  title: 'Your Sermon Title', // The actual sermon title
  speaker: 'Pastor Name',     // Who preached
  date: 'December 1, 2024',   // When it was preached
  series: 'Series Name',      // What series it's part of
  videoUrl: 'https://youtube.com/watch?v=YOUR_VIDEO_ID', // ← PASTE YOUR YOUTUBE URL HERE
  audioUrl: 'https://...',    // Optional: Link to MP3 download
  notesUrl: 'https://...',    // Optional: Link to sermon notes PDF
  scripture: 'John 3:16',     // Bible verses referenced
  description: 'Brief description of what the sermon is about...',
  thumbnail: '/artifacts/sunday_service_worship_1763537430650.png', // Image
  livestream: true,           // true if it was livestreamed
}
```

### Step 3: Example - Adding a Real Sermon

Let's say you have a sermon titled "Faith Over Fear" from November 24, 2024, and the YouTube URL is:
`https://www.youtube.com/watch?v=abc123xyz`

Here's how you'd add it:

```typescript
{
  id: '4',
  title: 'Faith Over Fear',
  speaker: 'Pastor Santhosh',
  date: 'November 24, 2024',
  series: 'Living Victoriously',
  videoUrl: 'https://youtube.com/watch?v=abc123xyz', // ← Real YouTube URL
  audioUrl: '',
  notesUrl: '',
  scripture: 'Matthew 14:22-33, Philippians 4:6-7',
  description: 'In times of uncertainty, God calls us to trust Him. Learn how to overcome fear through faith and experience His peace.',
  thumbnail: '/artifacts/sunday_service_worship_1763537430650.png',
  livestream: false,
}
```

### Step 4: Get Sermon Details from YouTube

For each video on your YouTube channel:

1. **Title**: Use the exact title from your YouTube video
2. **Date**: Check the video upload/publish date
3. **Description**: Use the video description or write a summary
4. **Thumbnail**: The site will use your placeholder images, but you can also:
   - Right-click on the YouTube thumbnail → "Copy image address"
   - Use that URL for the `thumbnail` field

### Step 5: Testing

After updating the sermon data:

1. Run `npm run dev` to start the development server
2. Visit `http://localhost:3000/sermons`
3. Click on a sermon to verify the YouTube video plays correctly

### Step 6: Adding Multiple Sermons

You can add as many sermons as you want. Just copy this template for each one:

```typescript
{
  id: 'unique-number', // Make sure each ID is different
  title: 'Sermon Title from YouTube',
  speaker: 'Pastor Santhosh',
  date: 'Month Day, Year',
  series: 'Series Name',
  videoUrl: 'https://youtube.com/watch?v=VIDEO_ID',
  audioUrl: '', // Leave empty if you don't have audio files
  notesUrl: '', // Leave empty if you don't have notes
  scripture: 'Bible Reference',
  description: 'What the sermon is about...',
  thumbnail: '/artifacts/sunday_service_worship_1763537430650.png',
  livestream: false, // Change to true if it's a live stream
},
```

## Quick Tips

### Finding All Your Videos
- Visit: https://youtube.com/@gracecovenantchurchsydney/videos
- This shows all your uploaded videos in order

### Getting Video Thumbnails
If you want to use YouTube's actual thumbnails:
```
https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg
```
Replace `VIDEO_ID` with your actual video ID.

### Series Organization
Group your sermons by series. For example:
- "Living by Faith" series
- "The Gospel of John" series
- "Christmas Messages" series

This helps visitors find related messages.

### Livestream Badge
Set `livestream: true` for any sermon that was/is livestreamed. This adds a special "Live" badge to the sermon card.

## Example: Complete Sermons Array

Here's what your updated `mockData.ts` sermons section might look like:

```typescript
export const sermons: Sermon[] = [
  {
    id: '1',
    title: 'The Power of Prayer',
    speaker: 'Pastor Santhosh',
    date: 'December 1, 2024',
    series: 'Foundations of Faith',
    videoUrl: 'https://youtube.com/watch?v=abc123',
    audioUrl: '',
    notesUrl: '',
    scripture: '1 Thessalonians 5:16-18, James 5:16',
    description: 'Discover the transformative power of prayer and how it strengthens our relationship with God.',
    thumbnail: '/artifacts/sunday_service_worship_1763537430650.png',
    livestream: true,
  },
  {
    id: '2',
    title: 'Walking in Grace',
    speaker: 'Pastor Santhosh',
    date: 'November 24, 2024',
    series: 'Foundations of Faith',
    videoUrl: 'https://youtube.com/watch?v=xyz789',
    audioUrl: '',
    notesUrl: '',
    scripture: 'Ephesians 2:8-9, Romans 5:1-2',
    description: 'Understanding God\'s amazing grace and how it changes everything about how we live.',
    thumbnail: '/artifacts/sunday_service_worship_1763537430650.png',
    livestream: false,
  },
  // Add more sermons here...
];
```

## Need Help?

If you have questions about adding your YouTube videos, feel free to:
- Check the existing examples in `data/mockData.ts`
- Test locally before deploying: `npm run dev`
- Contact support if you need assistance

## Updating Stock Photos

The site currently uses SVG placeholder images. To add real photos:

1. Take high-quality photos of your church services, events, etc.
2. Optimize them for web (recommended: JPG, under 500KB each)
3. Replace the files in `public/artifacts/` with the same filenames
4. Or use free stock photos from:
   - [Unsplash](https://unsplash.com) - Search for "church", "worship", "bible study"
   - [Pexels](https://pexels.com) - Free stock photos
   - [Pixabay](https://pixabay.com) - Free images

Recommended image sizes:
- Hero/Banner images: 1920x1080px (16:9 ratio)
- Event/Ministry cards: 800x600px (4:3 ratio)
- Staff photos: 400x400px (square)
