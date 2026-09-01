const SOURCE_FILES = {
    admission: '北京大学软件与微电子学院2026级电子信息专业硕士研究生入学注意事项及交费须知.pdf',
    medicalFee: '北京大学软件与微电子学院2026级新生体检交费须知.pdf',
    profile: '北京大学软件与微电子学院2026年关于新生完善个人信息及关注微信企业号的说明.pdf',
    exam: '关于2026级新生参加校规校纪线上考试的通知及附件.pdf',
    insurance: '关于参加学生团体保险项目的通知.pdf',
    luggageTag: '校本部研究生新生行李签.pdf',
    hukou: '北京大学新生户口迁移.txt'
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
    portrait: [SOURCE_FILES.admission],
    'medical-exam': [SOURCE_FILES.admission, SOURCE_FILES.medicalFee],
    'hukou-online': [SOURCE_FILES.hukou]
};

const TASKS = [
    { id: 'tuition', date: '8月27日 · 今天', title: '缴纳学费与住宿费', category: '缴费', deadline: '2026-08-27T23:59:59+08:00', deadlineLabel: '官方截止：8月27日', detail: '第一学年学费 30,000 元；大兴住宿另缴 1,020 元。缴费前确认 icampus 中邮箱和 11 位手机号准确。' },
    { id: 'medical-fee', date: '8月27日 · 立即处理', title: '核实体检费是否已缴', category: '健康', deadline: '2026-08-17T23:59:59+08:00', deadlineLabel: '原截止：8月17日 · 已逾期', detail: '体检费 139.30 元，所有新生必须参加入学体检。尚未缴费时立即联系学院确认补缴方式。' },
    { id: 'student-loan', date: '8月27日 · 如适用', title: '核实助学贷款回执', category: '缴费', deadline: '2026-08-16T12:00:00+08:00', deadlineLabel: '原截止：8月16日 12:00 · 已逾期', detail: '仅限办理了生源地国家助学贷款的同学。尚未提交线上回执信息时，立即联系学院。', optional: true },
    { id: 'profile', date: '8月27日 · 建议今天完成', title: '完善个人信息与校园服务', category: '材料', deadline: '2026-08-31T23:59:59+08:00', deadlineLabel: '银行卡登记最迟：8月31日', detail: '完善 icampus 信息，加入企业微信，领取微信校园卡；登记本人境内工商银行一类卡，并打印、签署 A4 单页学生信息表。', recommended: true },
    { id: 'exam', date: '8月28日前 · 建议', title: '完成校规校纪线上考试', category: '考试', deadline: '2026-08-31T17:00:00+08:00', deadlineLabel: '官方截止：8月31日 17:00', detail: '线上开卷，可多次答题；达到 90 分才合格。使用最新版 Chrome 或 Edge，合格后下载并备份《考试证书》。', recommended: true },
    { id: 'luggage', date: '8月27–28日 · 如托运', title: '办理中铁快运行李托运', category: '自愿事项', deadline: '2026-08-28T23:59:59+08:00', deadlineLabel: '建议提前 3–5 天办理', detail: '每件行李两端粘贴行李签；寄往北京市大兴工业开发区金苑路 24 号。晚到或通过其他快递送达的行李，学校不负责提取。', optional: true, recommended: true },
    { id: 'pack', date: '8月29日 · 建议', title: '整理报到材料与确认行程', category: '材料', deadline: '2026-08-29T23:59:59+08:00', deadlineLabel: '建议完成日：8月29日', detail: '准备录取通知书、身份证、学历和学位证书原件、签字信息表、一寸照片 4 张，以及户口或党团材料（如适用）。提前报到学院不接待。', recommended: true },
    { id: 'shuttle', date: '8月30日 · 如乘校车', title: '登记抵京后乘班车需求', category: '自愿事项', deadline: '2026-08-30T17:00:00+08:00', deadlineLabel: '官方截止：8月30日 17:00', detail: '在迎新网进入“报到前准备 → 抵京后乘班车到校需求登记”。校车先到校本部，再在北大东门换乘学院校车。', optional: true },
    { id: 'report', date: '8月31日 · 08:00–17:00', title: '到大兴校区报到', category: '报到', deadline: '2026-08-31T17:00:00+08:00', deadlineLabel: '报到时段：8月31日 08:00–17:00', detail: '凭录取通知书、有效身份证和学历学位证书原件办理；缺少学历或学位证书原件不予注册。当天领取校园卡。' },
    { id: 'hukou-original', date: '8月31日 · 报到时', title: '提交户口迁移材料原件', category: '自愿事项', deadline: '2026-08-31T17:00:00+08:00', deadlineLabel: '实际材料截止：8月31日报到时', detail: '仅限自愿迁户口者：京外交户口迁移证原件，京内交常住人口登记卡原件。新生报到时不迁入，入学后不再办理。', optional: true },
    { id: 'insurance', date: '8月31日 · 自愿', title: '决定是否购买学生团体保险', category: '自愿事项', deadline: '2026-08-31T23:59:59+08:00', deadlineLabel: '官方截止：8月31日 24:00', detail: '保费 80 元或 100 元/年。承保公司和方案在支付后不能更改，保险期为 2026年9月1日至2027年8月31日。', optional: true },
    { id: 'portrait', date: '8月31日–9月5日', title: '完成研究生新生图像采集', category: '报到', deadline: '2026-09-05T23:59:59+08:00', deadlineLabel: '官方时段：8月31日–9月5日', detail: '具体地点、批次和要求以校内门户《2026级研究生新生图像采集通知》为准。' },
    { id: 'medical-exam', date: '入学后 · 等待通知', title: '参加入学体检', category: '健康', deadlineLabel: '日期以学院通知为准', detail: '清淡饮食，无需空腹；上衣不能有金属装饰。携带身份证、校园卡和手机号，完成家庭医生签约；体检后一周进门户查看结果。' },
    { id: 'hukou-online', date: '9月13日前 · 如迁户口', title: '完成“我的户口卡”线上填报', category: '自愿事项', deadline: '2026-09-13T23:59:59+08:00', deadlineLabel: '系统截止：9月13日', detail: '仅面向非北京市常住户口且自愿迁入者。虽然系统 9月13日关闭，纸质原件仍须在 8月31日报到时提交。', optional: true }
];

const STORAGE_KEY = 'houjue-pku-schedule-v1';
const APPWRITE_CONFIG = {
    endpoint: 'https://sgp.cloud.appwrite.io/v1',
    projectId: 'onkiallpage',
    databaseId: 'pku-schedule',
    tableId: 'schedule-state'
};
const defaultState = { completed: [], notes: {}, generalNote: '' };
let state = loadState();
let activeFilter = 'all';
let currentUser = null;
let syncTimer = null;
let appwriteAccount = null;
let appwriteTables = null;

function normalizeState(value) {
    const taskIds = new Set(TASKS.map(task => task.id));
    const completed = Array.isArray(value?.completed) ? [...new Set(value.completed.filter(id => taskIds.has(id)))] : [];
    const notes = value?.notes && typeof value.notes === 'object' && !Array.isArray(value.notes) ? value.notes : {};
    return {
        completed,
        notes,
        generalNote: typeof value?.generalNote === 'string' ? value.generalNote : ''
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

        const sources = makeElement('div', 'task-sources');
        sources.append(makeElement('span', 'source-label', '出处'));
        const sourceList = makeElement('div', 'source-list');
        (TASK_SOURCES[task.id] || []).forEach(fileName => sourceList.append(makeElement('span', 'source-file', fileName)));
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
    const urgent = TASKS.filter(task => !state.completed.includes(task.id) && task.deadline && new Date(task.deadline) <= new Date('2026-08-31T23:59:59+08:00')).length;
    document.querySelector('#urgent-count').textContent = `${urgent} 项需在 8 月 31 日前处理`;
}

function toggleTask(id) {
    state.completed = state.completed.includes(id) ? state.completed.filter(item => item !== id) : [...state.completed, id];
    saveState();
    renderTasks();
    updateSummary();
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
    if (window.confirm('确定清空所有完成状态和备注吗？此操作无法撤销。')) {
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
initializeSync();
