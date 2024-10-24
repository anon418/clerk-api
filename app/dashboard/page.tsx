import { auth, currentUser } from '@clerk/nextjs/server'

export default async function DashboardPage() {
  const { userId } = auth()
  const user = await currentUser()
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Dashboard (server-side)</h1>
      <p className="mb-5">
        Welcome to Dashboard. This page shows the personal inform logged-in
        user.
      </p>
      {userId && (
        <div>
          <p>UserID: {userId}</p>
          <p>Name: {user?.fullName}</p>
          <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>
        </div>
      )}
    </div>
  )
}
