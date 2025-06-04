import { Avatar } from 'antd'
import avatar from '@/assets/avatar.gif'
import { useUserStore } from '@/store/user'
export default function WorkbenchHeader() {
  const { userInfo } = useUserStore()
  return (
    <div className="flex items-center rounded-lg border border-[#e4e4e7] bg-white px-4 py-5 dark:border-[#1c1e23] dark:bg-[#141414]">
      <Avatar size={72} src={avatar} />
      <div className="ml-5">
        <p className="text-lg font-bold text-[#1f1f1f] dark:text-[#dcdcdc]">
          早安，{userInfo?.name}，开始您一天的工作吧！
        </p>
        <p className="mt-2 text-[#515456] dark:text-[#e4e4e7]">今日晴，20℃ - 32℃！</p>
      </div>
      <div className="flex flex-1 items-center justify-end pr-5">
        <div className="flex flex-col items-end">
          <span className="text-[#515456] dark:text-[#e4e4e7]">代办</span>
          <span className="text-2xl dark:text-[#f8fafc]">2/10</span>
        </div>
        <div className="mx-12 flex flex-col items-end">
          <span className="text-[#515456] dark:text-[#e4e4e7]">项目</span>
          <span className="text-2xl dark:text-[#f8fafc]">8</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[#515456] dark:text-[#e4e4e7]">团队</span>
          <span className="text-2xl dark:text-[#f8fafc]">300</span>
        </div>
      </div>
    </div>
  )
}
