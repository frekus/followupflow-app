import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FollowupFlow — Post-Call Follow-ups on Autopilot',
  description:
    'When a Calendly call ends, FollowupFlow waits 10 minutes then sends a personalised Gmail follow-up, updates the ClickUp task, and alerts your team on Slack — automatically.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
