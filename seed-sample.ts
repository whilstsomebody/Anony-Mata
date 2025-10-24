/**
 * Local-only seeding script (no DB credentials used by default).
 * When run with proper environment variables it can be extended to insert sample messages.
 * For now it prints sample documents for manual import or UI testing.
 */
type SampleMessage = {
  toUserId: string;
  content: string;
  createdAt: string;
  anonymous: boolean;
};

const samples: SampleMessage[] = [
  { toUserId: 'user_demo_1', content: 'You inspired me today — thank you!', createdAt: new Date().toISOString(), anonymous: true },
  { toUserId: 'user_demo_1', content: 'Could you add a short FAQ to the profile page?', createdAt: new Date().toISOString(), anonymous: true },
  { toUserId: 'user_demo_2', content: 'Loving the new layout — very clean.', createdAt: new Date().toISOString(), anonymous: true },
];

if (require.main === module) {
  // Simple CLI output for manual copy/paste into DB or Postman.
  // To extend: connect to MongoDB using MONGODB_URI and insert samples.
  // eslint-disable-next-line no-console
  console.log('==== SAMPLE MESSAGES ====');
  samples.forEach((s, i) => {
    // eslint-disable-next-line no-console
    console.log(`#${i + 1}`, JSON.stringify(s, null, 2));
  });
  // eslint-disable-next-line no-console
  console.log('==== END ====');
}

export default samples;
