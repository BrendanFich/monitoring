import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Home from '@/components/Home/Home'
import Nav from '@/components/Nav/Nav'
import LectureHall from '@/components/LectureHall/LectureHall'
import Notice from '@/components/Notice/Notice'
import Dynamic from '@/components/Dynamic/Dynamic'
import Training from '@/components/Training/Training'
import EventMonitoring from '@/components/EventMonitoring/EventMonitoring'
import Regulations from '@/components/Regulations/Regulations'
import SolveCase from '@/components/SolveCase/SolveCase'
import Dispute from '@/components/Dispute/Dispute'
import Medication from '@/components/Medication/Medication'
import Purchase from '@/components/Purchase/Purchase'
import Complaints from '@/components/Complaints/Complaints'
import Survey from '@/components/Survey/Survey'
import OpinionCollection from '@/components/OpinionCollection/OpinionCollection'
import Plan from '@/components/Plan/Plan'
import ShareInfo from '@/components/ShareInfo/ShareInfo'
import BigDataReport from '@/components/BigDataReport/BigDataReport'
import OfficeMailbox from '@/components/OfficeMailbox/OfficeMailbox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Home',
      path: '/home',
      redirect: '/home/nav',
      component: Home,
      children: [
        {
          name: 'Nav',
          path: 'nav',
          component: Nav
        },
        {
          name: 'LectureHall',
          path: 'lectureHall',
          component: LectureHall
        },
        {
          name: 'Notice',
          path: 'notice',
          component: Notice
        },
        {
          name: 'Dynamic',
          path: 'dynamic',
          component: Dynamic
        },
        {
          name: 'Training',
          path: 'training',
          component: Training
        },
        {
          name: 'EventMonitoring',
          path: 'eventMonitoring',
          component: EventMonitoring
        },
        {
          name: 'Regulations',
          path: 'regulations',
          component: Regulations
        },
        {
          name: 'SolveCase',
          path: 'solveCase',
          component: SolveCase
        },
        {
          name: 'Dispute',
          path: 'dispute',
          component: Dispute
        },
        {
          name: 'Medication',
          path: 'medication',
          component: Medication
        },
        {
          name: 'Purchase',
          path: 'purchase',
          component: Purchase
        },
        {
          name: 'Complaints',
          path: 'complaints',
          component: Complaints
        },
        {
          name: 'Survey',
          path: 'survey',
          component: Survey
        },
        {
          name: 'OpinionCollection',
          path: 'opinionCollection',
          component: OpinionCollection
        },
        {
          name: 'Plan',
          path: 'plan',
          component: Plan
        },
        {
          name: 'ShareInfo',
          path: 'shareInfo',
          component: ShareInfo
        },
        {
          name: 'BigDataReport',
          path: 'bigDataReport',
          component: BigDataReport
        },
        {
          name: 'OfficeMailbox',
          path: 'officeMailbox',
          component: OfficeMailbox
        }
      ]
    }
  ]
})
