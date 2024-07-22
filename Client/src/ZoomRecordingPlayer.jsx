jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player/lazy';

const ZoomRecordingPlayer = () => {
  const [recordingUrl, setRecordingUrl] = useState('');

  useEffect(() => {
    const fetchRecordingUrl = async () => {
      try {
        const recordingFile = [
          {
            "id": "809f7e6e-4847-48a5-b675-e1cfc9e4d84f",
            "meeting_id": "QW2JIYQoTkyxB+7uYRn3vg==",
            "recording_start": "2024-06-09T14:06:58Z",
            "recording_end": "2024-06-09T16:39:08Z",
            "file_type": "MP4",
            "file_extension": "MP4",
            
            "file_size": 369677016,
            "play_url": "https://us06web.zoom.us/rec/play/wSdl4t6Vqkd9NfpYsP8oKdfcqYtASuhS_HyIW0esjnZ0acMkFGBKBaUwiOFw2sAaG1DPDw3n7BRizzEn.WrKIFIi4oywBlbKE",
            "download_url": "https://us06web.zoom.us/rec/download/wSdl4t6Vqkd9NfpYsP8oKdfcqYtASuhS_HyIW0esjnZ0acMkFGBKBaUwiOFw2sAaG1DPDw3n7BRizzEn.WrKIFIi4oywBlbKE",
            "status": "completed",
            "recording_type": "shared_screen_with_speaker_view"
          },
          {
            "id": "65e12b8e-17f1-4d4c-a7b2-098616576255",
            "meeting_id": "QW2JIYQoTkyxB+7uYRn3vg==",
            "recording_start": "2024-06-09T14:06:58Z",
            "recording_end": "2024-06-09T16:39:08Z",
            "file_type": "M4A",
            "file_extension": "M4A",
            "file_size": 138785657,
            "play_url": "https://us06web.zoom.us/rec/play/zI-gLi1ia_QX9_zZRAo9rLOAYudvyEbxiu1vx-8zS4ubgRPrmZadvpYRSGB-wb6zsfkjzIgcolIaTH2g.V9WpBvP6BDf1WKIR",
            "download_url": "https://us06web.zoom.us/rec/download/zI-gLi1ia_QX9_zZRAo9rLOAYudvyEbxiu1vx-8zS4ubgRPrmZadvpYRSGB-wb6zsfkjzIgcolIaTH2g.V9WpBvP6BDf1WKIR",
            "status": "completed",
            "recording_type": "audio_only"
          },
          {
            "id": "f9f5c58b-f5e6-4948-ab6d-3c6b8f8ab2a6",
            "meeting_id": "QW2JIYQoTkyxB+7uYRn3vg==",
            "recording_start": "2024-06-09T14:06:58Z",
            "recording_end": "2024-06-09T16:39:08Z",
            "file_type": "CHAT",
            "file_extension": "TXT",
            "file_size": 10033,
            "play_url": "https://us06web.zoom.us/rec/play/qQ924D8C-9aqyWneZ0NT1nHjZWu24pr5xNXfnwqCKPCMEUPdCcoMFVaVzhDbKy4eTIemJtA0VuMo5vyA.iGKpV1JhByicy1Op",
            "download_url": "https://us06web.zoom.us/rec/download/qQ924D8C-9aqyWneZ0NT1nHjZWu24pr5xNXfnwqCKPCMEUPdCcoMFVaVzhDbKy4eTIemJtA0VuMo5vyA.iGKpV1JhByicy1Op",
            "status": "completed",
            "recording_type": "chat_file"
          }
        ].find(file => file.file_extension === 'MP4');

        setRecordingUrl(recordingFile.play_url);
      } catch (error) {
        console.error('Error fetching recording URL:', error);
      }
    };

    fetchRecordingUrl();
  }, []);

  return (
    <div>
      {recordingUrl ? (
        <iframe src={recordingUrl} />
      ) : (
        <p>Loading recording...</p>
      )}
    </div>
  );
};

export default ZoomRecordingPlayer;