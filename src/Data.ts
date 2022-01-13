import {HeadCell, StateList} from "./Typse";

export const headCells: readonly HeadCell[] = [
  {
    id: 'namePatient',
    numeric: false,
    disablePadding: true,
    label: 'Name patient',
  },
  {
    id: 'nameClinic',
    numeric: true,
    disablePadding: false,
    label: 'Name clinic',
  },
  {
    id: 'startDate',
    numeric: true,
    disablePadding: false,
    label: 'Start Date',
  },
  {
    id: 'endDate',
    numeric: true,
    disablePadding: false,
    label: 'End Date',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
];

export const dataList: StateList = [
  {
    id: "5b992323-2c91-4e55-9759-d2a345629a33",
    startDate: "2021-10-02T06:00:00.000Z",
    endDate: "2021-10-02T07:00:00.000Z",
    clinicianName: "John Adams",
    patient: {
      id: "246ea59b-a083-49c9-a994-053726c3daa9",
      name: "Aaron Burr"
    },
    status: "ACTIVE"
  },
  {
    id: "9a970b9f-ff7a-48e3-a7a7-34c897ff01a9",
    startDate: "2021-10-01T09:00:00.000Z",
    endDate: "2021-10-01T09:45:00.000Z",
    clinicianName: "Eliza Hamilton",
    patient: {
      id: "fecc6020-02d3-43d7-8a78-c784789a7b59",
      name: "John Laurence"
    },
    status: "ACTIVE"
  },
  {
    id: "dd51ee1f-3a20-4714-98b0-a3557950709c",
    startDate: "2021-10-06T09:00:00.000Z",
    endDate: "2021-10-06T11:15:00.000Z",
    clinicianName: "Eliza Hamilton",
    patient: {
      id: "d81ed962-2158-4d3d-a9b4-a122024472a4",
      name: "Angelica Schuyler"
    },
    status: "ACTIVE"
  },
  {
    id: "3ccbfea5-52ab-491a-a7ee-e2d4721dc0aa",
    startDate: "2021-10-06T05:00:00.000Z",
    endDate: "2021-10-06T06:00:00.000Z",
    clinicianName: "Eliza Hamilton",
    patient: {
      id: "0896a9f7-17f7-410d-b737-d1f85299b217",
      name: "Charles Lee"
    },
    status: "ACTIVE"
  },
  {
    id: "3fae4b40-bcae-4932-ad73-05022c7f6344",
    startDate: "2021-11-06T05:00:00.000Z",
    endDate: "2021-11-06T06:00:00.000Z",
    clinicianName: "Peggy Schuyler",
    patient: {
      id: "c8da4d42-6e5a-4e3a-aa83-526eece2778f",
      name: "George Washington"
    },
    status: "CANCELLED"
  },
  {
    id: "188db7bf-dadd-4654-a635-0a6a5cefcf84",
    startDate: "2021-05-06T05:00:00.000Z",
    endDate: "2021-05-06T06:00:00.000Z",
    clinicianName: "John Adams",
    patient: {
      id: "54afb34c-c7df-4f1a-b628-6498dbc1fb01",
      name: "Hercules Mulligan"
    },
    status: "CANCELLED"
  },
  {
    id: "0b096cf0-e18c-4f71-985b-04f4f89ad5ed",
    startDate: "2021-04-06T04:00:00.000Z",
    endDate: "2021-04-06T05:00:00.000Z",
    clinicianName: "John Adams",
    patient: {
      id: "ea0f70fa-7f58-43dc-b887-b4a19ece8999", name: "Lin-Manuel Miranda"
    },
    status: "CANCELLED"
  },
  {
    id: "421817b9-73fa-4bd7-821b-044a7dd8c88c",
    startDate: "2021-09-06T04:00:00.000Z",
    endDate: "2021-09-06T05:00:00.000Z",
    clinicianName: "Peggy Schuyler",
    patient: {
      id: "412d70e4-a996-4486-a5d0-91f1f517cd2e", name: "Samuel Seabury"
    },
    status: "ACTIVE"
  },
  {
    id: "b7214dc7-00e6-4092-ab3d-de0ddcd05a0a",
    startDate: "2021-09-03T04:00:00.000Z",
    endDate: "2021-09-03T05:00:00.000Z",
    clinicianName: "Eliza Hamilton",
    patient: {
      id: "be916795-f7c4-458d-886a-422e3a2e9ea6",
      name: "Charles Lee"
    },
    status: "ACTIVE"
  },
  {
    id: "cddfc897-963a-4787-91b0-93dcca040145",
    startDate: "2021-09-02T04:00:00.000Z",
    endDate: "2021-09-02T05:00:00.000Z",
    clinicianName: "John Adams",
    patient: {
      id: "1c3bac67-743a-4b5c-9e3a-d1431f2cf593",
      name: "Samuel Seabury"
    },
    status: "CANCELLED"
  }
]