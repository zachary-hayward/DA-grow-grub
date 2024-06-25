import TasksTable from '../components/TasksTable'
import Banner from '../components/Banner'

export default function TaskPage() {
  return (
    <>
      {/* Page Banner - hard coded - currently WIP of componentising it */}
      <Banner 
        bannerInfo={{
          title: "My Tasks"
        }}/>

      <div className="my-20">
        <TasksTable
          id={0}
          plantName={''}
          plantImage={''}
          plantedDate={''}
          taskType={''}
          lastPerformed={''}
        />
      </div>
    </>
  )
}