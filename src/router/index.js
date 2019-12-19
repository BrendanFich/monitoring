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
import RegulationsOverview from '@/components/Regulations/RegulationsOverview/RegulationsOverview'
import AddRegulation from '@/components/Regulations/AddRegulation/AddRegulation'
import SearchAllRegulations from '@/components/Regulations/SearchAllRegulations/SearchAllRegulations'
import RegulationsDetails from '@/components/Regulations/RegulationsDetails/RegulationsDetails'

import Complaints from '@/components/Complaints/Complaints'
import ComplaintsOverview from '@/components/Complaints/ComplaintsOverview/ComplaintsOverview'
import ComplaintsDetails from '@/components/Complaints/ComplaintsDetails/ComplaintsDetails'

import OpinionCollection from '@/components/OpinionCollection/OpinionCollection'
import OpinionBox from '@/components/OpinionCollection/OpinionBox/OpinionBox'
import OpinionReply from '@/components/OpinionCollection/OpinionReply/OpinionReply'

import SolveCase from '@/components/SolveCase/SolveCase'
import Dispute from '@/components/Dispute/Dispute'
import Medication from '@/components/Medication/Medication'
import Purchase from '@/components/Purchase/Purchase'
import Survey from '@/components/Survey/Survey'
import Plan from '@/components/Plan/Plan'
import ShareInfo from '@/components/ShareInfo/ShareInfo'
import BigDataReport from '@/components/BigDataReport/BigDataReport'
import OfficeMailbox from '@/components/OfficeMailbox/OfficeMailbox'

import SystemMaint from '@/components/SystemMaint/SystemMaint'
import DeptManage from '@/components/SystemMaint/DeptManage/DeptManage'
import MenuAuthority from '@/components/SystemMaint/MenuAuthority/MenuAuthority'
import ParamsConfig from '@/components/SystemMaint/ParamsConfig/ParamsConfig'
import RolesMange from '@/components/SystemMaint/RolesMange/RolesMange'
import UserMange from '@/components/SystemMaint/UserMange/UserMange'
import UserRolesAuthority from '@/components/SystemMaint/UserRolesAuthority/UserRolesAuthority'

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
          redirect: '/home/regulations/regulationsOverview',
          component: Regulations,
          children: [
            {
              name: 'RegulationsOverview',
              path: 'regulationsOverview',
              component: RegulationsOverview
            },
            {
              name: 'AddRegulation',
              path: 'addRegulation',
              component: AddRegulation
            },
            {
              name: 'SearchAllRegulations',
              path: 'searchAllRegulations',
              component: SearchAllRegulations
            },
            {
              name: 'RegulationsDetails',
              path: 'regulationsDetails',
              component: RegulationsDetails
            }
          ]
        },
        {
          name: 'Complaints',
          path: 'complaints',
          redirect: '/home/complaints/complaintsOverview',
          component: Complaints,
          children: [
            {
              name: 'ComplaintsOverview',
              path: 'complaintsOverview',
              component: ComplaintsOverview
            },
            {
              name: 'ComplaintsDetails',
              path: 'complaintsDetails',
              component: ComplaintsDetails
            }
          ]
        },
        {
          name: 'OpinionCollection',
          path: 'opinionCollection',
          redirect: '/home/opinionCollection/OpinionBox',
          component: OpinionCollection,
          children: [
            {
              name: 'OpinionBox',
              path: 'opinionBox',
              component: OpinionBox
            },
            {
              name: 'OpinionReply',
              path: 'opinionReply',
              component: OpinionReply
            }
          ]
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
          name: 'Survey',
          path: 'survey',
          component: Survey
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
        },
        {
          name: 'SystemMaint',
          path: 'systemMaint',
          redirect: '/home/systemMaint/deptManage',
          component: SystemMaint,
          children: [
            {
              name: 'DeptManage',
              path: 'deptManage',
              component: DeptManage
            },
            {
              name: 'MenuAuthority',
              path: 'menuAuthority',
              component: MenuAuthority
            },
            {
              name: 'ParamsConfig',
              path: 'paramsConfig',
              component: ParamsConfig
            },
            {
              name: 'RolesMange',
              path: 'rolesMange',
              component: RolesMange
            },
            {
              name: 'UserMange',
              path: 'userMange',
              component: UserMange
            },
            {
              name: 'UserRolesAuthority',
              path: 'userRolesAuthority',
              component: UserRolesAuthority
            }
          ]
        }
      ]
    }
  ]
})
