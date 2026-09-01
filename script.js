const SOURCE_FILES = {
    admission: { name: '北京大学软件与微电子学院2026级电子信息专业硕士研究生入学注意事项及交费须知.pdf', href: 'files/admission-guide.pdf' },
    medicalFee: { name: '北京大学软件与微电子学院2026级新生体检交费须知.pdf', href: 'files/medical-fee.pdf' },
    profile: { name: '北京大学软件与微电子学院2026年关于新生完善个人信息及关注微信企业号的说明.pdf', href: 'files/profile-wechat.pdf' },
    exam: { name: '关于2026级新生参加校规校纪线上考试的通知及附件.pdf', href: 'files/rules-exam.pdf' },
    insurance: { name: '关于参加学生团体保险项目的通知.pdf', href: 'files/insurance.pdf' },
    luggageTag: { name: '校本部研究生新生行李签.pdf', href: 'files/luggage-tag.pdf' },
    hukou: { name: '北京大学新生户口迁移.txt', href: 'files/hukou.txt' },
    portrait: { name: '2026级研究生新生图像采集通知 - 软微.doc', href: 'files/portrait-notice.doc' },
    courseNotice: { name: '1-0通知正文.docx', href: 'files/course-notice.docx' },
    courseTable: { name: '1-1课表-电子信息和MEM（26-27学年度课表）0825.xls', href: 'files/course-table.xls' },
    courseGuide: { name: '1-2选课说明／选课说明-硕士.doc', href: 'files/course-selection-guide.doc' },
    calendar: { name: '北京大学2026—2027学年校历.pdf', href: 'files/academic-calendar.pdf' }
};

const TASK_SOURCES = {
    tuition: [SOURCE_FILES.admission],
    'medical-fee': [SOURCE_FILES.medicalFee, SOURCE_FILES.admission],
    'student-loan': [SOURCE_FILES.admission],
    profile: [SOURCE_FILES.profile, SOURCE_FILES.admission],
    exam: [SOURCE_FILES.exam, SOURCE_FILES.admission],
    luggage: [SOURCE_FILES.admission, SOURCE_FILES.luggageTag],
    pack: [SOURCE_FILES.admission, SOURCE_FILES.profile],
    shuttle: [SOURCE_FILES.admission],
    report: [SOURCE_FILES.admission],
    'hukou-original': [SOURCE_FILES.admission, SOURCE_FILES.hukou],
    insurance: [SOURCE_FILES.insurance, SOURCE_FILES.admission],
    portrait: [SOURCE_FILES.portrait, SOURCE_FILES.admission],
    'medical-exam': [SOURCE_FILES.admission, SOURCE_FILES.medicalFee],
    'hukou-online': [SOURCE_FILES.hukou],
    'course-initial': [SOURCE_FILES.courseGuide, SOURCE_FILES.courseTable, SOURCE_FILES.courseNotice],
    'course-result': [SOURCE_FILES.courseGuide],
    'course-adjust': [SOURCE_FILES.courseGuide, SOURCE_FILES.courseTable],
    'course-final': [SOURCE_FILES.courseGuide],
    'teaching-assistant': [SOURCE_FILES.courseNotice, SOURCE_FILES.courseTable]
};

const TASKS = [
    { id: 'student-loan', date: '8月16日 12:00前 · 如适用', title: '核实助学贷款回执', category: '缴费', deadline: '2026-08-16T12:00:00+08:00', deadlineLabel: '原截止：8月16日 12:00 · 已逾期', detail: '仅限办理生源地国家助学贷款的同学。线上回执关系到贷款到账和学费核销；若尚未提交，不要重复填写，先联系学院确认补交入口。', focus: [['适用对象', '生源地贷款学生', 'blue'], ['当前状态', '逾期需联系', 'red']], steps: ['检查回执是否显示已提交或已受理', '保存贷款回执和提交截图', '未提交时立即联系学院教务确认补办'], optional: true },
    { id: 'medical-fee', date: '8月17日前 · 立即核实', title: '核实体检费是否已缴', category: '健康', deadline: '2026-08-17T23:59:59+08:00', deadlineLabel: '原截止：8月17日 · 已逾期', detail: '入学体检为全体新生必办事项，缴费与现场体检相互关联。若系统中没有成功记录，应先截图当前状态，再向学院询问补缴方式。', focus: [['费用', '139.30 元', 'gold'], ['要求', '所有新生必须参加', 'red']], steps: ['进入指定缴费页面核对订单状态', '保留支付凭证或未缴费页面截图', '未缴费时联系学院确认补缴与体检安排'] },
    { id: 'tuition', date: '8月27日前', title: '缴纳学费与住宿费', category: '缴费', deadline: '2026-08-27T23:59:59+08:00', deadlineLabel: '官方截止：8月27日', detail: '完成第一学年学费和大兴校区住宿费缴纳。缴费信息会关联个人账户，操作前先检查 icampus 中邮箱与 11 位手机号，避免收不到凭证或通知。', focus: [['学费', '30,000 元', 'gold'], ['住宿费', '1,020 元', 'gold'], ['前置检查', '邮箱＋11位手机号', 'blue']], steps: ['登录缴费系统核对姓名、学号和金额', '分别完成学费及住宿费支付', '下载电子票据并确认订单状态为已支付'] },
    { id: 'luggage', date: '8月27–28日 · 如托运', title: '办理中铁快运行李托运', category: '自愿事项', deadline: '2026-08-28T23:59:59+08:00', deadlineLabel: '建议提前 3–5 天办理', detail: '如使用学校合作托运，每件行李两端都要粘贴行李签，并填写姓名与联系方式。晚到或使用其他快递到校的行李，学校不负责统一提取。', focus: [['收件地', '大兴区金苑路24号', 'blue'], ['标识', '每件两端贴签', 'red']], steps: ['下载并打印行李签，牢固粘贴两端', '向承运方确认预计到达时间', '随身携带证件、电脑和贵重物品'], optional: true, recommended: true },
    { id: 'pack', date: '8月29日前 · 建议', title: '整理报到材料与确认行程', category: '材料', deadline: '2026-08-29T23:59:59+08:00', deadlineLabel: '建议完成日：8月29日', detail: '按“原件、复印件、照片、按需材料”分类装袋。学历与学位证书原件是注册核验重点，缺少原件可能无法完成注册；学院不接待提前报到。', focus: [['必带', '录取通知书＋身份证', 'red'], ['学历材料', '学历、学位证原件', 'red'], ['照片', '一寸照片4张', 'gold']], steps: ['打印并签署学生信息表', '把户口、党团材料单独归档（如适用）', '确认8月31日规定时段抵达大兴校区'] , recommended: true },
    { id: 'shuttle', date: '8月30日 17:00前 · 如乘校车', title: '登记抵京后乘班车需求', category: '自愿事项', deadline: '2026-08-30T17:00:00+08:00', deadlineLabel: '官方截止：8月30日 17:00', detail: '需要乘坐迎新班车时，必须在迎新网提前登记。路线为先到校本部，再在北大东门换乘学院班车前往大兴校区。', focus: [['入口', '迎新网→报到前准备', 'blue'], ['换乘', '北大东门', 'gold']], steps: ['填写抵京车站、时间和联系方式', '截图保存登记结果', '预留站点到校本部及换乘等待时间'], optional: true },
    { id: 'profile', date: '8月31日前', title: '完善个人信息与校园服务', category: '材料', deadline: '2026-08-31T23:59:59+08:00', deadlineLabel: '银行卡登记最迟：8月31日', detail: '完善个人资料后，加入企业微信并领取微信校园卡；财务信息需登记本人境内工商银行一类卡。最后打印 A4 单页学生信息表并签字。', focus: [['银行卡', '本人境内工行一类卡', 'red'], ['表格', 'A4单页并签字', 'gold']], steps: ['核对 icampus 个人与联系方式', '加入企业微信并领取微信校园卡', '登记银行卡，打印并签署信息表'], recommended: true },
    { id: 'exam', date: '8月31日 17:00前', title: '完成校规校纪线上考试', category: '考试', deadline: '2026-08-31T17:00:00+08:00', deadlineLabel: '官方截止：8月31日 17:00', detail: '考试为线上开卷，可多次作答，系统以最终达到合格线为准。浏览器兼容性会影响提交，建议使用最新版 Chrome 或 Edge。', focus: [['合格线', '90 分', 'red'], ['次数', '可多次答题', 'green'], ['完成凭证', '下载考试证书', 'gold']], steps: ['打开通知中的考试入口并完成答题', '确认最终分数达到90分', '下载《考试证书》并备份到云盘'], recommended: true },
    { id: 'report', date: '8月31日 · 08:00–17:00', title: '到大兴校区报到', category: '报到', deadline: '2026-08-31T17:00:00+08:00', deadlineLabel: '报到时段：8月31日 08:00–17:00', detail: '在规定时段到大兴校区办理身份核验与注册。录取通知书、身份证、学历和学位证书原件均用于现场审核，当天还需领取校园卡。', focus: [['地点', '大兴校区', 'blue'], ['时间', '08:00—17:00', 'red'], ['硬性材料', '学历学位证原件', 'red']], steps: ['按现场指引完成身份与学历核验', '提交需要现场收取的材料', '领取校园卡并当场检查姓名、照片'] },
    { id: 'hukou-original', date: '8月31日 · 报到时', title: '提交户口迁移材料原件', category: '自愿事项', deadline: '2026-08-31T17:00:00+08:00', deadlineLabel: '材料截止：8月31日报到时', detail: '仅限自愿迁户口者。京外生源提交户口迁移证原件，京内集体户口提交常住人口登记卡原件；报到时未迁入，入学后不再补办。', focus: [['京外', '户口迁移证原件', 'gold'], ['京内集体户', '常住人口登记卡原件', 'gold'], ['补办', '入学后不再办理', 'red']], steps: ['核对迁移证姓名、身份证号和迁往地址', '提前复印或拍照留档', '报到现场按学院要求提交原件'], optional: true },
    { id: 'insurance', date: '8月31日 24:00前 · 自愿', title: '决定是否购买学生团体保险', category: '自愿事项', deadline: '2026-08-31T23:59:59+08:00', deadlineLabel: '官方截止：8月31日 24:00', detail: '学生团体保险为自愿项目。支付前应比较保障方案与承保公司；一旦支付，承保公司和方案不能更改。', focus: [['保费', '80元或100元／年', 'gold'], ['保险期', '2026.09.01—2027.08.31', 'blue'], ['支付后', '方案不可更改', 'red']], steps: ['阅读两种方案的保障范围和除外责任', '决定是否购买并选定承保公司', '支付后保存电子保单和付款凭证'], optional: true },
    { id: 'portrait', date: '8月31日–9月5日', title: '完成研究生新生图像采集', category: '报到', deadline: '2026-09-05T23:59:59+08:00', deadlineLabel: '官方时段：8月31日–9月5日', detail: '图像用于研究生学籍与校内管理，应按学院通知的批次、地点和着装要求到场。不要只凭日程推测具体时段，以原通知为准。', focus: [['办理窗口', '8月31日—9月5日', 'red'], ['具体批次', '以学院通知为准', 'blue']], steps: ['打开原通知确认本人批次与地点', '按要求携带校园卡或身份证', '采集后确认照片与个人信息无误'] },
    { id: 'course-initial', date: '9月4日 08:30前', title: '完成秋季学期网上初选', category: '选课', deadline: '2026-09-04T08:30:00+08:00', deadlineLabel: '初选截止：9月4日 08:30', detail: '登录北京大学选课系统，先维护个人培养计划，再按课表中的“北大系统编号后四位”选课。系统课程名可能与课表略有差异，以编号和班次为准。', focus: [['入口', 'elective.pku.edu.cn', 'blue'], ['截止', '9月4日 08:30', 'red'], ['学分上限', '不得超过21学分', 'red']], steps: ['核对培养方向、课程编号、班次与备注', '把拟选课程加入培养计划并提交初选', '截图保存选课结果，检查没有误选MEM课程'] },
    { id: 'course-result', date: '9月5日', title: '查询网上初选结果', category: '选课', deadline: '2026-09-05T23:59:59+08:00', deadlineLabel: '查询日期：9月5日', detail: '初选提交不等于最终选中。9月5日应重新登录选课系统核对每门课状态，并把未选中、错班或冲突课程列入补退选清单。', focus: [['查询', '9月5日', 'red'], ['重点', '逐门核对状态', 'gold']], steps: ['登录系统查看初选结果', '与网页“我的课表”逐门对照', '记录未选中课程与备选方案'] },
    { id: 'medical-exam', date: '入学后 · 等待通知', title: '参加入学体检', category: '健康', deadlineLabel: '日期以学院通知为准', detail: '体检前保持清淡饮食，无需空腹；上衣不能带金属装饰。现场需携带身份证、校园卡和可接收短信的手机号，并完成家庭医生签约。', focus: [['饮食', '清淡、无需空腹', 'green'], ['携带', '身份证＋校园卡＋手机', 'gold'], ['结果', '体检后一周查询', 'blue']], steps: ['关注学院发布的批次和地点', '按要求完成体检与家庭医生签约', '一周后登录门户查看并处理异常结果'] },
    { id: 'hukou-online', date: '9月13日前 · 如迁户口', title: '完成“我的户口卡”线上填报', category: '自愿事项', deadline: '2026-09-13T23:59:59+08:00', deadlineLabel: '系统截止：9月13日', detail: '仅面向非北京市常住户口且自愿迁入者。线上填报与纸质提交是两个环节：系统9月13日关闭，但纸质原件应已在8月31日报到时提交。', focus: [['线上截止', '9月13日', 'red'], ['纸质原件', '8月31日报到时提交', 'gold']], steps: ['登录“我的户口卡”填写迁移信息', '核对与纸质迁移证内容完全一致', '提交后保存成功页面截图'], optional: true },
    { id: 'course-adjust', date: '9月5日–9月21日 08:30', title: '完成补选、退选与最终确认', category: '选课', deadline: '2026-09-21T08:30:00+08:00', deadlineLabel: '补退选截止：9月21日 08:30', detail: '补退选是更改选课的最后正式窗口。研究生在本阶段退课，成绩单不记载；逾期未选、错选或漏退的后果由本人承担。', focus: [['最后窗口', '9月21日 08:30截止', 'red'], ['本阶段退课', '成绩单不记载', 'green'], ['跨院课程', '学分无效', 'red']], steps: ['结合首周试听确认课程与班次', '检查时间冲突、方向限制和总学分', '提交补退选后再次截图并逐门核对'] },
    { id: 'course-final', date: '9月22日以后', title: '查询最终选课结果', category: '选课', deadline: '2026-09-22T23:59:59+08:00', deadlineLabel: '9月22日起可查询', detail: '最终结果不在普通选课列表中确认，应从校内门户进入“业务办理→研究生院→培养办教务→查看在校成绩”核对。', focus: [['可查询', '9月22日以后', 'blue'], ['路径', '查看在校成绩', 'gold']], steps: ['按通知路径打开最终结果', '与自己的周课表和培养计划对照', '如有异常立即联系对应系教务员'] },
    { id: 'teaching-assistant', date: '9月30日前 · 高年级如适用', title: '完成秋季课程助教申请与遴选', category: '自愿事项', deadline: '2026-09-30T23:59:59+08:00', deadlineLabel: '助教遴选截止：9月30日', detail: '助教面向23、24、25级高年级同学征聘。申请人需联系任课教师，并邮件提交《助教申请表》和《助教信息登记表》；无需提供纸质材料。', focus: [['对象', '23—25级学生', 'blue'], ['截止', '9月30日', 'red'], ['材料', '两份电子表格', 'gold']], steps: ['参照课表联系目标课程任课教师', '填写助教申请表与信息登记表', '由任课教师考察并向系教务员邮件确认人选'], optional: true }
];

const STORAGE_KEY = 'houjue-pku-schedule-v1';
const APPWRITE_CONFIG = {
    endpoint: 'https://sgp.cloud.appwrite.io/v1',
    projectId: 'onkiallpage',
    databaseId: 'pku-schedule',
    tableId: 'schedule-state'
};
const defaultState = { completed: [], notes: {}, generalNote: '', courseSelections: {} };
let state = loadState();
let activeFilter = 'all';
let currentUser = null;
let syncTimer = null;
let appwriteAccount = null;
let appwriteTables = null;
let courseData = null;
let activeSemester = '2026-fall';
let activeCourseView = 'week';

function normalizeState(value) {
    const taskIds = new Set(TASKS.map(task => task.id));
    const completed = Array.isArray(value?.completed) ? [...new Set(value.completed.filter(id => taskIds.has(id)))] : [];
    const notes = value?.notes && typeof value.notes === 'object' && !Array.isArray(value.notes) ? value.notes : {};
    return {
        completed,
        notes,
        generalNote: typeof value?.generalNote === 'string' ? value.generalNote : '',
        courseSelections: value?.courseSelections && typeof value.courseSelections === 'object' && !Array.isArray(value.courseSelections)
            ? value.courseSelections
            : {}
    };
}

function loadState() {
    try {
        const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
        return parsed ? normalizeState(parsed) : normalizeState(defaultState);
    } catch {
        return normalizeState(defaultState);
    }
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    if (currentUser) scheduleRemoteSave();
}

function setSyncStatus(kind, label) {
    const indicator = document.querySelector('#sync-indicator');
    indicator.className = `sync-indicator ${kind}`;
    document.querySelector('#sync-status').textContent = label;
}

function updateSyncControls(isLoggedIn) {
    document.querySelector('#sync-login').hidden = isLoggedIn;
    document.querySelector('#sync-logout').hidden = !isLoggedIn;
}

function getPrivatePermissions(userId) {
    return [
        Appwrite.Permission.read(Appwrite.Role.user(userId)),
        Appwrite.Permission.update(Appwrite.Role.user(userId)),
        Appwrite.Permission.delete(Appwrite.Role.user(userId))
    ];
}

function scheduleRemoteSave() {
    window.clearTimeout(syncTimer);
    setSyncStatus('syncing', '正在同步…');
    syncTimer = window.setTimeout(saveRemoteState, 550);
}

async function saveRemoteState() {
    if (!currentUser || !appwriteTables) return;
    window.clearTimeout(syncTimer);
    try {
        await appwriteTables.upsertRow({
            databaseId: APPWRITE_CONFIG.databaseId,
            tableId: APPWRITE_CONFIG.tableId,
            rowId: currentUser.$id,
            data: { state: JSON.stringify(state) },
            permissions: getPrivatePermissions(currentUser.$id)
        });
        setSyncStatus('synced', '云端已同步');
    } catch (error) {
        console.error('Appwrite sync failed', error);
        setSyncStatus('error', '云端同步失败，本地已保存');
    }
}

function applyState(nextState) {
    state = normalizeState(nextState);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    const generalNote = document.querySelector('#general-note');
    if (generalNote) generalNote.value = state.generalNote;
    renderTasks();
    updateSummary();
    renderTimetable();
}

async function loadRemoteState() {
    setSyncStatus('syncing', '正在读取云端…');
    try {
        const row = await appwriteTables.getRow({
            databaseId: APPWRITE_CONFIG.databaseId,
            tableId: APPWRITE_CONFIG.tableId,
            rowId: currentUser.$id
        });
        applyState(JSON.parse(row.state));
        setSyncStatus('synced', '云端已同步');
    } catch (error) {
        if (error?.code === 404) {
            await saveRemoteState();
            return;
        }
        console.error('Appwrite load failed', error);
        setSyncStatus('error', '云端读取失败，继续本地保存');
    }
}

async function activateSync(user) {
    currentUser = user;
    updateSyncControls(true);
    await loadRemoteState();
}

function getLoginError(error) {
    if (error?.code === 401) return '邮箱或密码不正确。';
    if (error?.code === 429) return '尝试次数过多，请稍后再试。';
    return '登录失败，请检查网络后重试。';
}

async function initializeSync() {
    if (!window.Appwrite) {
        setSyncStatus('error', '同步组件加载失败，本地保存可用');
        return;
    }
    const client = new Appwrite.Client()
        .setEndpoint(APPWRITE_CONFIG.endpoint)
        .setProject(APPWRITE_CONFIG.projectId);
    appwriteAccount = new Appwrite.Account(client);
    appwriteTables = new Appwrite.TablesDB(client);
    try {
        await activateSync(await appwriteAccount.get());
    } catch (error) {
        if (error?.code !== 401) console.error('Appwrite session check failed', error);
        updateSyncControls(false);
        setSyncStatus('local', '本地保存');
    }
}

function getStatus(task, isDone) {
    if (isDone) return { label: '已完成', className: 'done' };
    if (!task.deadline) return { label: '待通知', className: 'waiting' };
    const now = new Date();
    const deadline = new Date(task.deadline);
    const today = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Shanghai' }).format(now);
    if (now > deadline) return { label: '已到期', className: 'overdue' };
    if (today === task.deadline.slice(0, 10)) return { label: '今天截止', className: 'today' };
    return task.optional ? { label: '可选', className: 'optional' } : { label: '待完成', className: 'upcoming' };
}

function makeElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
}

function renderTasks() {
    const list = document.querySelector('#task-list');
    list.replaceChildren();
    const completed = new Set(state.completed);
    const visible = TASKS.filter(task => activeFilter === 'done' ? completed.has(task.id) : activeFilter === 'pending' ? !completed.has(task.id) : true);

    if (!visible.length) {
        list.append(makeElement('div', 'empty-state', '这里暂时没有日程。'));
        return;
    }

    visible.forEach(task => {
        const isDone = completed.has(task.id);
        const status = getStatus(task, isDone);
        const card = makeElement('article', `task-card${isDone ? ' is-done' : ''}`);
        card.append(makeElement('span', 'task-dot'));

        const body = makeElement('div', 'task-body');
        const top = makeElement('div', 'task-topline');
        top.append(makeElement('span', 'task-date', task.date));
        top.append(makeElement('span', `task-status ${status.className}`, status.label));
        body.append(top);

        const titleRow = makeElement('div', 'task-title-row');
        const checkboxLabel = makeElement('label', 'task-checkbox');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = isDone;
        checkbox.setAttribute('aria-label', `标记“${task.title}”为${isDone ? '未完成' : '已完成'}`);
        checkbox.addEventListener('change', () => toggleTask(task.id));
        checkboxLabel.append(checkbox, makeElement('span', 'custom-check', '✓'));
        titleRow.append(checkboxLabel);

        const titleCopy = document.createElement('div');
        const tags = makeElement('div', 'task-tags');
        tags.append(makeElement('span', '', task.category));
        if (task.optional) tags.append(makeElement('span', '', '按需'));
        if (task.recommended) tags.append(makeElement('span', '', '含建议日期'));
        titleCopy.append(tags, makeElement('h4', '', task.title));
        titleRow.append(titleCopy);
        body.append(titleRow, makeElement('p', 'task-detail', task.detail));

        if (task.focus?.length) {
            const focusGrid = makeElement('div', 'task-focus');
            task.focus.forEach(([label, value, tone = 'gold']) => {
                const item = makeElement('span', `focus-item ${tone}`);
                item.append(makeElement('small', '', label), makeElement('strong', '', value));
                focusGrid.append(item);
            });
            body.append(focusGrid);
        }

        if (task.steps?.length) {
            const steps = makeElement('ol', 'task-steps');
            task.steps.forEach(step => steps.append(makeElement('li', '', step)));
            body.append(steps);
        }

        const sources = makeElement('div', 'task-sources');
        sources.append(makeElement('span', 'source-label', '出处'));
        const sourceList = makeElement('div', 'source-list');
        (TASK_SOURCES[task.id] || []).forEach(file => {
            const link = makeElement('a', 'source-file', file.name);
            link.href = file.href;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.title = `打开原文件：${file.name}`;
            sourceList.append(link);
        });
        sources.append(sourceList);
        body.append(sources);

        const footer = makeElement('div', 'task-footer');
        footer.append(makeElement('span', 'task-deadline', task.deadlineLabel));
        const note = document.createElement('input');
        note.className = 'task-note';
        note.placeholder = '添加备注…';
        note.value = state.notes[task.id] || '';
        note.setAttribute('aria-label', `${task.title}的备注`);
        note.addEventListener('input', event => {
            state.notes[task.id] = event.target.value;
            saveState();
        });
        footer.append(note);
        body.append(footer);
        card.append(body);
        list.append(card);
    });
}

function updateSummary() {
    const count = state.completed.length;
    const percent = Math.round(count / TASKS.length * 100);
    document.querySelector('#progress-value').textContent = `${percent}%`;
    document.querySelector('#progress-bar').style.width = `${percent}%`;
    document.querySelector('#progress-count').textContent = `${count} / ${TASKS.length} 项完成`;
    const now = new Date();
    const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    const urgent = TASKS.filter(task => !state.completed.includes(task.id) && task.deadline && new Date(task.deadline) <= nextWeek).length;
    document.querySelector('#urgent-count').textContent = `${urgent} 项已到期或七日内截止`;
}

function toggleTask(id) {
    state.completed = state.completed.includes(id) ? state.completed.filter(item => item !== id) : [...state.completed, id];
    saveState();
    renderTasks();
    updateSummary();
}

const WEEK_DAYS = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
const SLOT_ORDER = [
    { id: '上午', label: '上午', time: '08:30—11:30' },
    { id: '下午', label: '下午', time: '14:00—17:00' },
    { id: '晚上', label: '晚上', time: '18:00—21:00' }
];

function getSemesterCourses() {
    return courseData?.courses.filter(course => course.semester === activeSemester) || [];
}

function getSelectedCourseIds() {
    return new Set(Array.isArray(state.courseSelections[activeSemester]) ? state.courseSelections[activeSemester] : []);
}

function toggleCourse(courseId) {
    const selected = getSelectedCourseIds();
    selected.has(courseId) ? selected.delete(courseId) : selected.add(courseId);
    state.courseSelections[activeSemester] = [...selected];
    saveState();
    renderTimetable();
}

function getMeetingSummary(course) {
    if (!course.meetings.length) return '时间地点待通知';
    return course.meetings.map(item => `${item.day} ${item.slot} · ${item.room}`).join('；');
}

function renderTimetableSummary(selectedCourses) {
    const summary = document.querySelector('#timetable-summary');
    if (!summary) return;
    const meetingKeys = new Map();
    selectedCourses.forEach(course => course.meetings.forEach(meeting => {
        const key = `${meeting.day}-${meeting.slot}`;
        meetingKeys.set(key, (meetingKeys.get(key) || 0) + 1);
    }));
    const conflicts = [...meetingKeys.values()].filter(count => count > 1).length;
    const semester = courseData?.semesters.find(item => item.id === activeSemester);
    summary.replaceChildren();
    [['当前学期', `${semester?.label || ''} · ${semester?.range || ''}`], ['已加入', `${selectedCourses.length} 门课程`], ['时间冲突', conflicts ? `${conflicts} 处需核对` : '未发现']].forEach(([label, value], index) => {
        const item = makeElement('article', index === 2 && conflicts ? 'has-conflict' : '');
        item.append(makeElement('span', '', label), makeElement('strong', '', value));
        summary.append(item);
    });
}

function makeCourseCard(course, compact = false) {
    const selected = getSelectedCourseIds().has(course.id);
    const card = makeElement('article', `course-card${compact ? ' compact' : ''}${selected ? ' selected' : ''}`);
    const heading = makeElement('div', 'course-card-heading');
    const copy = document.createElement('div');
    copy.append(makeElement('span', 'course-code', course.code), makeElement('h3', '', course.name));
    const button = makeElement('button', selected ? 'remove-course' : 'add-course', selected ? '移出课表' : '加入课表');
    button.type = 'button';
    button.addEventListener('click', () => toggleCourse(course.id));
    heading.append(copy, button);
    card.append(heading);
    const meta = makeElement('p', 'course-meta', `${course.teacher} · ${course.hours} 学时 · ${getMeetingSummary(course)}`);
    card.append(meta);
    if (course.note) card.append(makeElement('p', 'course-note', course.note));
    return card;
}

function renderWeekView(selectedCourses) {
    const container = document.querySelector('#week-view');
    container.replaceChildren();
    if (!selectedCourses.length) {
        const empty = makeElement('div', 'timetable-empty');
        empty.append(makeElement('strong', '', '你的课表还是空的'), makeElement('p', '', '打开课程库，按课程编号、教师或名称搜索，再把准备选修的课程加入周课表。'));
        const button = makeElement('button', '', '去课程库选课');
        button.type = 'button';
        button.addEventListener('click', () => setCourseView('catalog'));
        empty.append(button);
        container.append(empty);
        return;
    }

    const scroller = makeElement('div', 'week-scroller');
    const grid = makeElement('div', 'week-grid');
    grid.append(makeElement('div', 'week-corner', '时段'));
    WEEK_DAYS.forEach(day => grid.append(makeElement('div', 'week-day', day)));
    SLOT_ORDER.forEach(slot => {
        const label = makeElement('div', 'week-slot');
        label.append(makeElement('strong', '', slot.label), makeElement('span', '', slot.time));
        grid.append(label);
        WEEK_DAYS.forEach(day => {
            const cell = makeElement('div', 'week-cell');
            selectedCourses.filter(course => course.meetings.some(meeting => meeting.day === day && course.slot.includes(slot.id))).forEach(course => {
                const meeting = course.meetings.find(item => item.day === day);
                const item = makeElement('article', 'week-course');
                item.append(makeElement('strong', '', course.name), makeElement('span', '', `${course.code} · ${course.teacher}`), makeElement('span', '', meeting?.room || '地点待通知'));
                cell.append(item);
            });
            grid.append(cell);
        });
    });
    scroller.append(grid);
    container.append(scroller);

    const unscheduled = selectedCourses.filter(course => !course.meetings.length || !SLOT_ORDER.some(slot => course.slot.includes(slot.id)));
    if (unscheduled.length) {
        const section = makeElement('section', 'unscheduled-courses');
        section.append(makeElement('h3', '', '时间待定或特殊安排'));
        const list = makeElement('div', 'unscheduled-list');
        unscheduled.forEach(course => list.append(makeCourseCard(course, true)));
        section.append(list);
        container.append(section);
    }
}

function renderCourseCatalog(courses) {
    const catalog = document.querySelector('#course-catalog');
    const query = document.querySelector('#course-search').value.trim().toLowerCase();
    const visible = courses.filter(course => [course.code, course.name, course.teacher, course.note].join(' ').toLowerCase().includes(query));
    catalog.replaceChildren();
    if (!visible.length) {
        catalog.append(makeElement('div', 'catalog-empty', '没有找到匹配课程，请尝试课程编号或教师姓名。'));
        return;
    }
    visible.forEach(course => catalog.append(makeCourseCard(course)));
}

function renderTimetable() {
    if (!courseData) return;
    const courses = getSemesterCourses();
    const selected = getSelectedCourseIds();
    const selectedCourses = courses.filter(course => selected.has(course.id));
    renderTimetableSummary(selectedCourses);
    document.querySelector('#week-view').hidden = activeCourseView !== 'week';
    document.querySelector('#course-catalog').hidden = activeCourseView !== 'catalog';
    document.querySelector('#course-search').closest('label').hidden = activeCourseView !== 'catalog';
    activeCourseView === 'week' ? renderWeekView(selectedCourses) : renderCourseCatalog(courses);
}

function setCourseView(view) {
    activeCourseView = view;
    document.querySelectorAll('[data-course-view]').forEach(button => button.classList.toggle('active', button.dataset.courseView === view));
    renderTimetable();
}

document.querySelectorAll('[data-semester]').forEach(button => button.addEventListener('click', () => {
    activeSemester = button.dataset.semester;
    document.querySelectorAll('[data-semester]').forEach(item => item.classList.toggle('active', item === button));
    renderTimetable();
}));
document.querySelectorAll('[data-course-view]').forEach(button => button.addEventListener('click', () => setCourseView(button.dataset.courseView)));
document.querySelector('#course-search').addEventListener('input', () => renderTimetable());

async function initializeTimetable() {
    try {
        const response = await fetch('course-data.json');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        courseData = await response.json();
        renderTimetable();
    } catch (error) {
        console.error('Course data failed to load', error);
        document.querySelector('#week-view').replaceChildren(makeElement('div', 'timetable-empty', '课程数据加载失败，请刷新页面后重试。'));
    }
}

document.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', () => {
        activeFilter = button.dataset.filter;
        document.querySelectorAll('[data-filter]').forEach(item => item.classList.toggle('active', item === button));
        renderTasks();
    });
});

const generalNote = document.querySelector('#general-note');
generalNote.value = state.generalNote;
generalNote.addEventListener('input', event => {
    state.generalNote = event.target.value;
    saveState();
});

document.querySelector('#print-schedule').addEventListener('click', () => window.print());
document.querySelector('#clear-schedule').addEventListener('click', () => {
    if (window.confirm('确定清空所有完成状态、备注和已选课程吗？此操作无法撤销。')) {
        state = normalizeState(defaultState);
        generalNote.value = '';
        saveState();
        renderTasks();
        updateSummary();
    }
});

const syncDialog = document.querySelector('#sync-dialog');
const syncForm = document.querySelector('#sync-form');
const syncError = document.querySelector('#sync-error');
const syncSubmit = document.querySelector('#sync-submit');

document.querySelector('#sync-login').addEventListener('click', () => {
    syncError.hidden = true;
    syncDialog.showModal();
    document.querySelector('#sync-email').focus();
});

document.querySelector('#sync-dialog-close').addEventListener('click', () => syncDialog.close());
syncDialog.addEventListener('click', event => {
    if (event.target === syncDialog) syncDialog.close();
});

syncForm.addEventListener('submit', async event => {
    event.preventDefault();
    syncError.hidden = true;
    syncSubmit.disabled = true;
    syncSubmit.textContent = '正在登录…';
    try {
        await appwriteAccount.createEmailPasswordSession({
            email: syncForm.elements.email.value.trim(),
            password: syncForm.elements.password.value
        });
        syncForm.elements.password.value = '';
        syncDialog.close();
        await activateSync(await appwriteAccount.get());
    } catch (error) {
        syncError.textContent = getLoginError(error);
        syncError.hidden = false;
    } finally {
        syncSubmit.disabled = false;
        syncSubmit.textContent = '登录并同步';
    }
});

document.querySelector('#sync-logout').addEventListener('click', async () => {
    try {
        await appwriteAccount.deleteSession({ sessionId: 'current' });
    } catch (error) {
        console.error('Appwrite logout failed', error);
    }
    currentUser = null;
    window.clearTimeout(syncTimer);
    updateSyncControls(false);
    setSyncStatus('local', '已退出 · 本地保存');
});

document.querySelector('#current-year').textContent = new Date().getFullYear();
renderTasks();
updateSummary();
initializeTimetable();
if (!['localhost', '127.0.0.1'].includes(location.hostname)) {
    initializeSync();
} else {
    updateSyncControls(false);
    setSyncStatus('local', '本地预览 · 不连接云端');
}
