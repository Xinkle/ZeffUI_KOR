/* prettier-ignore */
/* exported language */
var language = [
	{ id: "settingsheader", string: "환경설정" },
	{ id: "savesettings", string: "저장" },
	{ id: "deletesettings", string: "설정 삭제" },
	{ id: "applytoallelements", string: "모든 글꼴에 적용하기" },
	{ id: "generaloptions", string: "기본 설정" },
	{ id: "exportsettings", string: "설정 내보내기" },
	{ id: "importsettings", string: "설정 가져오기" },
	{ id: "exportsettingsjson", string: "JSON파일 내보내기" },
	{ id: "importsettingsjson", string: "JSON파일 가져오기" },
	// NAV MENU
	{ id: "healthmana", string: "체력 / 마나" },
	{ id: "tickers", string: "틱 타이머" },
	{ id: "timers", string: "타이머" },
	{ id: "cooldowns", string: "쿨다운" },
	// COMPONENTS
	{ id: "healthbar", string: "HP 바" },
	{ id: "manabar", string: "MP 바" },
	{ id: "mpticker", string: "MP 틱 타이머" },
	{ id: "dotticker", string: "도트딜 틱 타이머" },
	{ id: "hotticker", string: "도트힐 틱 타이머" },
	{ id: "pulltimers", string: "초읽기 타이머" },
	{ id: "bufftimers", string: "버프 타이머" },
	{ id: "dottimers", string: "도트 타이머" },
	{ id: "stacksbar", string: "스택 바" },
	{ id: "raidbuffs", string: "시너지" },
	{ id: "party", string: "파티원 버프기" },
	{ id: "skin", string: "스킨" },
	{ id: "language", string: "언어" },
	{ id: "mitigations", string: "뎀감기" },
	{ id: "customcooldowns", string: "사용자지정 쿨타임" },
	{ id: "editcustomcooldowns", string: "사용자지정 쿨타임 수정" },
	{ id: "overrideoptions", string: "스킬 설정" },
	{ id: "importexport", string: "설정 내보내기 / 가져오기" },
	{ id: "debug", string: "디버그" },
	// DESCRIPTIONS
	{ id: "generaldescription", string: "ZeffUI의 기본설정을 변경합니다." },
	{ id: "healthbardescription", string: "HP 바에 대한 설정을 변경합니다." },
	{ id: "manabardescription", string: "MP 바에 대한 설정을 변경합니다." },
	{ id: "mptickerdescription", string: "MP 틱 타이머에 대한 설정을 변경합니다." },
	{ id: "dottickerdescription", string: "도트딜 틱 타이머에 대한 설정을 변경합니다." },
	{ id: "hottickerdescription", string: "도트힐 틱 타이머에 대한 설정을 변경합니다." },
	{ id: "bufftimersdescription", string: "버프 타이머에 대한 설정을 변경합니다." },
	{ id: "dottimersdescription", string: "도트 타이머에 대한 설정을 변경합니다." },
	{ id: "pulltimersdescription", string: "초읽기 타이머에 대한 설정을 변경합니다." },
	{ id: "stacksbardescription", string: "스택에 대한 설정을 변경합니다." },
	{ id: "raidbuffdescription", string: "시너지에 대한 설정을 변경합니다. (딜러의 시너지에 대해서만 작동)" },
	{ id: "mitigationdescription", string: "뎀감기 바에 대한 설정을 변경합니다." },
	{ id: "customcooldownsdescription", string: "사용자지정 쿨타임에 대한 설정을 변경합니다." },
	{ id: "editcustomcooldownsdescription", string: "사용자지정 쿨타임 알림을 설정합니다." },
	{ id: "partydescription", string: "파티원들의 개별 버프기에 대한 설정을 변경합니다." },
	{ id: "overridedescription", string: "적용되는 기술/능력에 대한 개별 설정을 변경합니다." },
	{ id: "importexportdescription", string: "현재 설정을 내보내거나 가져올 수 있습니다." },
	{ id: "debugdescription", string: "ZeffUI 디버그 설정을 변경합니다." },
	{ id: "profiledescription", string: "ZeffUI 프로필 설정을 변경합니다." },
	// COMPONENT PROPERTIES
	{ id: "posx", string: "X 위치값" },
	{ id: "posy", string: "Y 위치값" },
	{ id: "scale", string: "크기" },
	{ id: "rotation", string: "회전" },
	{ id: "padding", string: "여백" },
	{ id: "color", string: "색" },
	{ id: "image", string: "이미지 표시" },
	{ id: "example", string: "적용 예시" },
	{ id: "growleft", string: "오른쪽 정렬" },
	{ id: "growdirection", string: "정렬 방향" },
	{ id: "down", string: "아래" },
	{ id: "up", string: "위" },
	{ id: "left", string: "왼쪽" },
	{ id: "right", string: "오른쪽" },
	{ id: "columns", string: "1줄에 표시할 아이콘 갯수" },
	{ id: "hideoutofcombat", string: "비전투중일때 숨기기" },
	{ id: "hidesolo", string: "파티가 아닐때 숨기기" },
	{ id: "droppedoff", string: "효과가 사라졌을때 숨기기" },
	{ id: "alwaysshow", string: "항상 보이기 (쿨타임 중에도 보임)" },
	{ id: "textformat", string: "텍스트 형식" },
	{ id: "font", string: "글꼴" },
	{ id: "healthtext", string: "체력 텍스트" },
	{ id: "manatext", string: "마나 텍스트" },
	{ id: "pulltimertext", string: "초읽기 텍스트" },
	{ id: "bufftext", string: "버프 텍스트" },
	{ id: "dottext", string: "도트 텍스트" },
	{ id: "multidot", string: "멀티도트 (아직 구현되지않음)" },
	{ id: "ability", string: "기술" },
	{ id: "abilityenabled", string: "활성화" },
	{ id: "duration", string: "지속시간" },
	{ id: "cooldown", string: "쿨타임" },
	{ id: "overridedefaults", string: "설정 바꾸기" },
	{ id: "ttsenabled", string: "TTS 활성화" },
	{ id: "ttstype", string: "TTS 활성화시점" },
	{ id: "abilitycooldown", string: "쿨타임이 끝날때" },
	{ id: "abilityduration", string: "효과가 끝날때" },
	{ id: "oncast", string: "시전 시" },
	{ id: "durationcolor", string: "지속시간일때 색" },
	{ id: "cooldowncolor", string: "쿨타임일때 색" },
	{ id: "durationoutlinecolor", string: "지속시간일때 테두리 색" },
	{ id: "cooldownoutlinecolor", string: "쿨타임일때 테두리 색" },
	{ id: "durationbold", string: "지속시간일때 텍스트 두껍게" },
	{ id: "cooldownbold", string: "쿨타임일때 텍스트 두껍게" },
	{ id: "durationoutline", string: "지속시간일때 테두리" },
	{ id: "cooldownoutline", string: "쿨타임일때 테두리" },
	{ id: "includealliance", string: "연합파티원 포함하기" },
	{ id: "orderbypartymember", string: "파티 멤버 순으로 정렬" },
	{ id: "order", string: "우선순위" },
	{ id: "partyorder", string: "파티 우선순위 (드래그/드롭)" },
	{ id: "mode", string: "모드" },
	{ id: "add", string: "추가" },
	{ id: "edit", string: "수정" },
	{ id: "delete", string: "삭제" },
	{ id: "save", string: "저장" },
	{ id: "noabilitiesfound", string: "해당 기술이 없습니다..." },
	{ id: "search", string: "검색" },
	{ id: "id", string: "ID" },
	{ id: "jobrole", string: "직업 / 역할" },
	{ id: "pvp", string: "PvP" },
	{ id: "usewebtts", string: "바이두 TTS 사용" },
	{ id: "jobthresholds", string: "Job Thresholds" },
	{ id: "lowcolor", string: "낮을 때 색" },
	{ id: "medcolor", string: "중간일 때 색" },
	{ id: "specificjobsonly", string: "특정 직업 한정" },
	{ id: "ttsearly", string: "TTS를 미리 불러주는 시간(초)" },
	{ id: "charges", string: "충전횟수" },
	{ id: "warning", string: "경고!" },
	{ id: "textalign", string: "텍스트 정렬" },
	{ id: "center", string: "가운데" },
	{ id: "alwaystick", string: "항상 틱 체크" },
	{ id: "usehdicons", string: "HD 아이콘 사용" },
	{ id: "type", string: "유형" },
	{ id: "staticfontsizeenabled", string: "정적 폰트 크기 사용" },
	{ id: "staticfontsize", string: "정적 폰트 크기" },
	{ id: "fontxoffset", string: "폰트 X 오프셋" },
	{ id: "fontyoffset", string: "폰트 Y 오프셋" },
	{ id: "setjob", string: "직업 설정" },
	{ id: "customfonts", string: "사용자지정 글꼴" },
	{ id: "customcss", string: "사용자지정 CSS" },
	{ id: "profiles", string: "프로필" },
	{ id: "load", string: "불러오기" },
	{ id: "profilename", string: "프로필 이름" },
	{ id: "job", string: "직업" },
	{ id: "linkjob", string: "이 직업에 연결" },
	{ id: "linkall", string: "모든 직업에 연결" },
	{ id: "unlink", string: "연결 해제" },
	{ id: "includeprofiles", string: "프로필 포함" },
	{ id: "preventdoubletts", string: "TTS가 두번 울리는 것 방지" },
	// SKINS
	{ id: "skindefault", string: "기본 (by Square Enix)" },
	{ id: "skinmaterialdark", string: "Material Dark (by skotlex)" },
	{ id: "skinmaterialdiscord", string: "Material Discord (by skotlex)" },
	{ id: "skinhydaelyn", string: "Hydaelyn UI (by Vec7rex)" },
	// COLORS
	{ id: "colordarkred", string: "어두운 빨강" },
	{ id: "colorbrightred", string: "밝은 빨강" },
	{ id: "colorbabyblue", string: "연하늘색" },
	{ id: "colorgreenblue", string: "청록색" },
	{ id: "colortoxicgreen", string: "독성 녹색" },
	{ id: "colorlightblue", string: "밝은 파랑색" },
	{ id: "colordarkblue", string: "어두운 파랑색" },
	{ id: "colordarkgreen", string: "암록색" },
	{ id: "colorjunglegreen", string: "정글 녹색" },
	{ id: "colorpurple", string: "보라색" },
	{ id: "colorfuchsia", string: "자홍색" },
	{ id: "colorlightpink", string: "밝은 분홍색" },
	{ id: "colorlightgold", string: "밝은 금색" },
	{ id: "colordarkgold", string: "어두운 금색" },
	{ id: "colororange", string: "주황색" },
	{ id: "colorgrey", string: "회색" },
	// JOBS
	{ id: "pld", string: "나이트" },
	{ id: "gla", string: "검술사" },
	{ id: "war", string: "전사" },
	{ id: "mrd", string: "도끼술사" },
	{ id: "drk", string: "암흑기사" },
	{ id: "gnb", string: "건브레이커" },
	{ id: "whm", string: "백마도스" },
	{ id: "cnj", string: "환술사" },
	{ id: "sch", string: "학자" },
	{ id: "ast", string: "점성술사" },
	{ id: "sge", string: "현자" },
	{ id: "mnk", string: "몽크" },
	{ id: "pgl", string: "격투사" },
	{ id: "drg", string: "용기사" },
	{ id: "lnc", string: "창술사" },
	{ id: "nin", string: "닌자" },
	{ id: "rog", string: "쌍검사" },
	{ id: "sam", string: "사무라이" },
	{ id: "rpr", string: "리퍼" },
	{ id: "brd", string: "음유시인" },
	{ id: "arc", string: "궁술사" },
	{ id: "mch", string: "기공사" },
	{ id: "dnc", string: "무도가" },
	{ id: "blm", string: "흑마도사" },
	{ id: "thm", string: "주술사" },
	{ id: "smn", string: "소환사" },
	{ id: "acn", string: "비술사" },
	{ id: "rdm", string: "적마도사" },
	{ id: "blu", string: "청마도사" },
	{ id: "tank", string: "탱커" },
	{ id: "healer", string: "힐러" },
	{ id: "dps", string: "딜러" },
	{ id: "meleedps", string: "근접 딜러" },
	{ id: "rangeddps", string: "물리 원거리 딜러" },
	{ id: "casterdps", string: "마법 원거리 딜러" },
	{ id: "melee", string: "근접" },
	{ id: "ranged", string: "원거리" },
	{ id: "caster", string: "캐스터" },
	{ id: "other", string: "기타" },
	// UI TEXT
	{ id: "dot-anchor", string: "도트 기준위치" },
	{ id: "buff-anchor", string: "버프 기준위치" },
	{ id: "raidbuffs-anchor", string: "시너지 기준위치" },
	{ id: "mitigation-anchor", string: "뎀감기 기준위치" },
	{ id: "party-anchor", string: "파티 기준위치" },
	{ id: "customcd-anchor", string: "사용자지정 알림 기준위치" },
	{ id: "pulltimer", string: "초읽기" },
	// CONTEXT MENU
	{ id: "lock", string: "HUD 잠금/해제" },
	{ id: "grid", string: "격자판 보기/숨기기" },
	{ id: "reload", string: "새로고침" },
	{ id: "settings", string: "설정" },
	{ id: "close", string: "닫기" },
	// MESSAGES
	{ id: "jsonwarning", string: "JSON 파일로 가져오기/내보내기가 무엇인지 아시는 분만 사용해주세요!" },
	{ id: "reloadoverlay", string: "설정 초기화를 마무리하고 기본 설정을 다시 받기 위해 오버레이를 새로고침 해주세요." },
	{ id: "saveandclosewindow", string: "설정을 저장하고 이 창을 닫으시겠습니까?" },
	{ id: "deleteallsettings", string: "정말로 모든 설정을 삭제하시겠습니까?" },
	{ id: "activesettingswindow", string: "설정창이 이미 띄워져 있습니다. 열려있는 창을 닫고 새 창을 여시겠습니까?" },
	{ id: "currentsettingscopied", string: "현재 설정이 클립보드에 복사되었습니다." },
	{ id: "importsettingsoverwrite", string: "이 설정을 가져오시겠습니까? 이전 설정을 완전히 덮어쓰게 됩니다!" },
	{ id: "invalidsettingsstring", string: "유효하지 않은 설정 문자열입니다. 붙여넣은 내용을 다시 확인해주세요." },
	{ id: "lockoverlay", string: "오버레이의 위치 잠금 기능을 켜야 위젯을 움직일 수 있습니다!" },
	{ id: "deleteprofile", string: "이 프로필을 삭제하시겠습니까?" },
	{ id: "experimentalsavesettings", string: "실험적 기능으로, 문제가 생길 수 있습니다. 설정을 미리 저장해두세요." },
];
