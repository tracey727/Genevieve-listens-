# GENEVIEVE LISTENS™ — Tracey

A private, voice-first crisis-support and clinician-handover PWA built around Tracey's stated needs and observed patterns.

## What is working

- Elegant tap-to-record voice check-ins; no typing required.
- Audio saved locally in IndexedDB.
- Automatic browser speech transcription when available.
- Rule-based recognition of personal triggers, reactions, dissociation and suicidal-thought language.
- Spoken Genevieve response using the device voice.
- Safety check with direct 000 and Lifeline actions.
- Ninety-second settle pathway designed not to force face or torso contact.
- Voice record, pattern counts, “helped / not enough” learning feedback.
- One-tap clinician handover download.
- Voice-based promise/callback record.
- Private backup including audio data.
- Offline PWA after first successful load.
- Static Vercel deployment; no API keys and no server required.

## Important limits

- This is a support and documentation tool, not a psychologist or emergency service.
- The app cannot automatically contact a clinician or trusted person.
- Browser transcription availability varies. Audio recording still works when transcription does not.
- Data is stored on the device/browser. Clearing site data or using Private Browsing can remove it. Use backups.
- Backup JSON is not encrypted. Store it privately.

## Deploy

Upload the contents of this folder to one GitHub repository and import that repository into Vercel. No build command or environment variables are required.

For microphone access, use the secure Vercel HTTPS address and approve the browser microphone prompt.
