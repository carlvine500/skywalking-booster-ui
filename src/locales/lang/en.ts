/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const msg = {
  generalService: "General Service",
  services: "Services",
  service: "Service",
  traces: "Traces",
  metrics: "Metrics",
  serviceMesh: "Service Mesh",
  infrastructure: "Infrastructure",
  virtualMachine: "Virtual Machine",
  kubernetes: "Kubernetes",
  dashboardNew: "New Dashboard",
  dashboardList: "Dashboard List",
  logs: "Logs",
  events: "Events",
  alerts: "Alerts",
  settings: "Settings",
  dashboards: "Dashboards",
  profiles: "Profiles",
  database: "Database",
  serviceName: "Service Name",
  technologies: "Technologies",
  generalServicePanel: "General Service Panel",
  health: "Health",
  groupName: "Group Name",
  topologies: "Topologies",
  dataPanel: "Data Panel",
  controlPanel: "Control Panel",
  eventList: "Event List",
  databasePanel: "Database Panel",
  meshServicePanel: "Service Panel",
  newDashboard: "Create a new dashboard",
  dashboardEdit: "Edit the dashboard",
  edit: "Edit",
  delete: "Delete",
  layer: "Layer",
  endpoint: "Endpoint",
  instance: "Instance",
  create: "Create",
  loading: "Loading",
  selectVisualization: "Select your visualization",
  graphStyles: "Graph styles",
  widgetOptions: "Widget options",
  standardOptions: "Standard options",
  max: "Max",
  min: "Min",
  plus: "Plus",
  minus: "Minus",
  multiply: "Multiply",
  divide: "Divide",
  convertToMilliseconds: "Convert Unix Timestamp(milliseconds)",
  convertToSeconds: "Convert Unix Timestamp(seconds)",
  hourTip: "Select Hour",
  minuteTip: "Select Minute",
  secondTip: "Select Second",
  second: "s",
  yearSuffix: "Year",
  monthsHead: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec",
  months: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec",
  weeks: "Mon_Tue_Wed_Thu_Fir_Sat_Sun",
  hello: "Hello",
  helloMessage: "Welcome Back, Apache SkyWalking APM System !",
  username: "Username",
  password: "Password",
  title: "Title",
  width: "Width",
  height: "Height",
  login: "Login Now",
  signout: "Sign Out",
  dashboard: "Dashboard",
  topology: "Topology",
  trace: "Trace",
  alarm: "Alarm",
  event: "Event",
  auto: "Auto",
  reload: "Reload",
  usermode: "User Mode",
  editmode: "Edit Mode",
  currentVersion: "Current Version",
  currentPage: "Current Page",
  version: "Version",
  page: "Page",
  currentDatabase: "Current Database",
  templateConfig: "Template Configuration",
  copy: "Copy",
  reset: "Reset",
  apply: "Apply",
  createTemplate: "Create Template",
  templateType: "Template Type",
  templateName: "Template Name",
  template: "Template",
  confirm: "Confirm",
  cancel: "Cancel",
  createTab: "Create Tab",
  tabName: "Tab Name",
  nouse: "No Use",
  allServices: "All Services",
  serviceDetail: "Service Detail",
  detectPoint: "Detect Point",
  callType: "Call Type",
  server: "Server",
  client: "Client",
  name: "Name",
  types: "Types",
  cpm: "Cpm",
  sla: "SLA",
  latency: "Latency",
  avgResponseTime: "Avg Response Time ( ms )",
  avgThroughput: "Load (CPM - calls per minute)",
  avgSLA: "Successful Rate ( % )",
  all: "All",
  success: "Success",
  error: "Error",
  endpoints: "Endpoints",
  cache: "Cache",
  global: "Global",
  serviceendpoint: "ServiceEndpoint",
  serviceinstance: "ServiceInstance",
  databaseaccess: "DatabaseAccess",
  servicerelation: "ServiceRelation",
  serviceinstancerelation: "ServiceInstanceRelation",
  endpointrelation: "EndpointRelation",
  status: "Status",
  endpointName: "Endpoint Name",
  search: "Search",
  clear: "Clear",
  more: "More",
  traceID: "Trace ID",
  range: "Range",
  timeRange: "Time Range",
  duration: "Duration",
  startTime: "Start Time",
  start: "Start",
  spans: "Spans",
  spanInfo: "Span Info",
  spanType: "Span Type",
  time: "Time",
  tags: "Tags",
  component: "Component",
  table: "Table",
  list: "List",
  tree: "Tree",
  filterScope: "Filter Scope",
  searchKeyword: "Search Keyword",
  quarterHourCutTip: "Last 15 mins",
  halfHourCutTip: "Last 30 mins",
  hourCutTip: "Last 1 hour",
  dayCutTip: "Last 1 day",
  weekCutTip: "Last 1 week",
  monthCutTip: "Last 1 month",
  serverZone: "Server Zone",
  percentResponse: "Response Time Percentile ( ms )",
  exportImage: "Export image",
  queryData: "Query",
  previousService: "Previous Service",
  nextService: "Next Service",
  object: "Object",
  ShowInstanceDependency: "Show Instance Dependency",
  InstanceDependencyTitle: "Service Instance Dependency",
  profile: "Profile",
  newTask: "New Task",
  monitorTime: "Monitor Time",
  monitorDuration: "Monitor Duration",
  minThreshold: "Min Duration Threshold",
  dumpPeriod: "Dump Period",
  createTask: "Create Task",
  maxSamplingCount: "Max Sampling Count",
  analyze: "Analyze",
  noData: "No Data",
  taskInfo: "Task Information",
  task: "Task",
  operationType: "Operation Type",
  operationTime: "Operation Time",
  taskView: "View Task",
  includeChildren: "Include Children",
  excludeChildren: "Exclude Children",
  view: "View",
  timeTips: "Time interval cannot exceed 60 days",
  standardAPM: "Standard",
  entityType: "Entity type",
  maxItemNum: "Max number of Item",
  independentSelector: "Selectors",
  unknownMetrics: "Unknown Metrics",
  labels: "Labels",
  aggregation: "Data Calculation",
  unit: "Unit",
  labelsIndex: "Label Subscript",
  parentService: "Parent Service",
  isParentService: "Set Parent Service",
  noneParentService: "No Parent Service",
  serviceGroup: "Service Group",
  endpointFilter: "Endpoint Filter",
  databaseView: "Database",
  browserView: "Browser",
  metricsView: "NOC - Network Operation Center",
  sortOrder: "Sort Order",
  descendOrder: "Descend Order",
  increaseOrder: "Increase Order",
  defaultOrder: "Default Order",
  chartType: "Chart Type",
  currentDepth: "Current Depth",
  traceTagsTip: `Only tags defined in the core/default/searchableTracesTags are searchable.
  Check more details on the Configuration Vocabulary page`,
  tagsLink: "Configuration Vocabulary page",
  addTag: "Please input a tag",
  log: "Log",
  logCategory: "Log Category",
  errorCatalog: "Error Catalog",
  logDetail: "Log Detail ",
  timeReload: "Notice: The time interval must be greater than 0",
  errorInfo: "Error Info",
  stack: "Stack",
  serviceVersion: "Service Version",
  errorPage: "Error Page",
  category: "Category",
  grade: "Grade",
  relatedTraceLogs: "Related Logs",
  setConditions: "More Conditions",
  metricName: "Select Metric Names",
  keywordsOfContent: "Keys Of Content",
  excludingKeywordsOfContent: "Exclude Keys Of Content",
  return: "Return",
  isError: "Error",
  contentType: "Content Type",
  content: "Content",
  viewLogs: "View Logs",
  logsTagsTip: `Only tags defined in the core/default/searchableLogsTags are searchable.
  Check more details on the Configuration Vocabulary page`,
  keywordsOfContentLogTips:
    "Current storage of SkyWalking OAP server does not support this.",
  setEvent: "Set Event",
  instanceAttributes: "Instance Attributes",
  serviceEvents: "Service Events",
  select: "Select",
  eventID: "Event ID",
  eventName: "Event Name",
  endTime: "End Time",
  instanceEvents: "Instance Events",
  endpointEvents: "Endpoint Events",
  enableEvents: "Enable Events",
  disableEvents: "Disable Events",
  eventSeries: "Events Series",
  eventsType: "Event Type",
  eventsMessage: "Event Message",
  eventsParameters: "Event Parameters",
  eventDetail: "Event Detail",
  value: "Value",
  tableHeader: "Header Names",
  tableValues: "Table Values",
  show: "Show",
  hide: "Hide",
  statistics: "Statistics",
  message: "Message",
  tooltipsContent: "Tooltip Content",
  alarmDetail: "Alarm Detail",
  scope: "Scope",
  destService: "Destination Service",
  destServiceInstance: "Destination Service Instance",
  destEndpoint: "Destination Endpoint",
  eventSource: "Event Source",
  modalTitle: "Inspection",
  selectRedirectPage: "Do you want to inspect Traces or Logs of %s service?",
  logAnalysis: "Log Analysis Language",
  logDataBody: "The content of the log",
  addType: "Please input a type",
  traceContext: "Logs with trace context",
  traceSegmentId: "Trace Segment ID",
  spanId: "Span ID",
  inputTraceSegmentId: "Please input the trace segment ID",
  inputSpanId: "Please input the span ID",
  inputTraceId: "Please input the trace ID",
  dsl: "Script input for LAL",
  logContentType: "The type of the log content",
  logRespContent: "Log Content",
  analysis: "Analysis",
  waitLoading: "Loading",
  dslEmpty: "Script input of LAL should not be empty",
  logContentEmpty: "The content of the log should not be empty.",
  debug: "Debug",
  addTraceID: "Please input a trace ID",
  addKeywordsOfContent: "Please input a keyword of content",
  addExcludingKeywordsOfContent: "Please input a keyword of excluding content",
  noticeTag: "Please press enter after inputting a tag.",
  conditionNotice:
    "Notice: Please press enter after inputting a tag, key of content, exclude key of content.",
  cacheModalTitle: "Clear cache reminder",
  yes: "Yes",
  no: "No",
  cacheReminderContent:
    "SkyWalking detected dashboard template updates, do you want to update?",
  language: "Language",
};
export default msg;
