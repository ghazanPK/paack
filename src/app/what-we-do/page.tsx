import { redirect } from 'next/navigation';

export default function WhatWeDoRedirect() {
  // Legacy route - redirect to new /initiatives
  redirect('/initiatives');
}
