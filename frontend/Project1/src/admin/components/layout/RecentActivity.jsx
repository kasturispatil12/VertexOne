import "../../css/RecentActivity.css";

function RecentActivity({ activities = [] }) {

  return (
    <div className="recent-activity">

      <h2>Recent Activity</h2>

      {
        activities.length === 0 ? (
          <p>No recent activity</p>
        ) : (

          activities.map((activity, index) => (

            <div
              className="activity-item"
              key={index}
            >

              <p>{activity.title}</p>

              <span>
                {new Date(activity.date).toLocaleDateString()}
              </span>

            </div>

          ))

        )
      }

    </div>
  );
}

export default RecentActivity;