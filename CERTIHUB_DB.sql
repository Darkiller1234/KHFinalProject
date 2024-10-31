DROP TABLE REPORT;
DROP TABLE REPORT_TYPE;
DROP TABLE BOARD_LIKE_LOG;
DROP TABLE BOARD_HATE_LOG;
DROP TABLE MEMBER_CALENDAR;
DROP TABLE MENTOR_LIKE_LOG;
DROP TABLE ALERT;
DROP TABLE MESSAGE;
DROP TABLE MEMBER_LICENSE;
DROP TABLE MEMBER_LOOK_LICENSE;
DROP TABLE COMPILER_LOG;
DROP TABLE DATA_BOARD_ATTACH;
DROP TABLE DATA_BOARD;
DROP TABLE REPLY;
DROP TABLE BOARD_IMG;
DROP TABLE STUDY_BOARD;
DROP TABLE BOARD;
DROP TABLE STUDY_MEMBER;
DROP TABLE STUDY;
DROP TABLE MEMBER;
DROP TABLE BOARD_TAB;
DROP TABLE LICENSE;

DROP SEQUENCE BOARD_TAB_SEQ;
DROP SEQUENCE BOARD_SEQ;
DROP SEQUENCE BOARD_IMG_SEQ;
DROP SEQUENCE REPLY_SEQ;
DROP SEQUENCE LICENSE_SEQ;
DROP SEQUENCE MEMBER_SEQ;
DROP SEQUENCE STUDY_SEQ;
DROP SEQUENCE STUDY_BOARD_SEQ;
DROP SEQUENCE REPORT_SEQ;
DROP SEQUENCE REPORT_TYPE_SEQ;
DROP SEQUENCE COMPILE_SEQ;
DROP SEQUENCE CALENDAR_SEQ;
DROP SEQUENCE MENTOR_LIKE_LOG_SEQ;
DROP SEQUENCE ALERT_SEQ;
DROP SEQUENCE MESSAGE_SEQ;
DROP SEQUENCE DATA_BOARD_ATT_SEQ;
DROP SEQUENCE DATA_BOARD_SEQ;

-- ���̺� ����

CREATE TABLE BOARD_TAB(
    TAB_NO NUMBER,
    TAB_NAME VARCHAR2(60),
    CONSTRAINT BTAB_TNO_PK PRIMARY KEY(TAB_NO)
);

COMMENT ON COLUMN BOARD_TAB.TAB_NO IS '�ǹ�ȣ';
COMMENT ON COLUMN BOARD_TAB.TAB_NAME IS '���̸�';

CREATE TABLE LICENSE(
    LICENSE_NO NUMBER,
    LICENSE_NAME VARCHAR2(150) NOT NULL,
    LICENSE_DESC VARCHAR2(3000),
    CONSTRAINT L_LNO_PK PRIMARY KEY(LICENSE_NO)
);

COMMENT ON COLUMN LICENSE.LICENSE_NO IS '�ڰ�����ȣ';
COMMENT ON COLUMN LICENSE.LICENSE_NAME IS '�ڰ����̸�';
COMMENT ON COLUMN LICENSE.LICENSE_DESC IS '�ڰ�������';

CREATE TABLE MEMBER(
    MEMBER_NO NUMBER,
    MEMBER_ID VARCHAR2(60) NOT NULL,
    MEMBER_PWD VARCHAR2(300) NOT NULL,
    MEMBER_NAME VARCHAR2(60) NOT NULL,
    MEMBER_INTRO VARCHAR2(150),
    MEMBER_NICKNAME VARCHAR2(60) NOT NULL,
    EMAIL VARCHAR2(100) NOT NULL,
    PHONE VARCHAR2(30) NOT NULL,
    ENROLL_DATE DATE DEFAULT SYSDATE NOT NULL,
    STATUS VARCHAR2(3) DEFAULT 'Y' CHECK( STATUS IN ('Y','N')),
    MANAGER_STATUS VARCHAR2(3) DEFAULT 'N' NOT NULL CHECK( MANAGER_STATUS IN ('Y','N')),
    MENTOR_STATUS VARCHAR2(3) DEFAULT 'N' NOT NULL CHECK( MENTOR_STATUS IN ('Y','N')),
    MENTOR_VALID VARCHAR2(3) DEFAULT 'N' NOT NULL CHECK( MENTOR_VALID IN ('Y','N')),
    MENTOR_INTRO VARCHAR2(1000),
    CAREER VARCHAR2(600),
    CONSTRAINT M_MNO_PK PRIMARY KEY(MEMBER_NO)
);

COMMENT ON COLUMN MEMBER.MEMBER_NO IS '�����ȣ';
COMMENT ON COLUMN MEMBER.MEMBER_ID IS '������̵�';
COMMENT ON COLUMN MEMBER.MEMBER_PWD IS '�����й�ȣ';
COMMENT ON COLUMN MEMBER.MEMBER_NAME IS '��������̸�';
COMMENT ON COLUMN MEMBER.MEMBER_INTRO IS '����ڱ�Ұ�';
COMMENT ON COLUMN MEMBER.MEMBER_NICKNAME IS '����г���';
COMMENT ON COLUMN MEMBER.EMAIL IS '����̸���';
COMMENT ON COLUMN MEMBER.PHONE IS '�����ȭ��ȣ';
COMMENT ON COLUMN MEMBER.ENROLL_DATE IS '���������';
COMMENT ON COLUMN MEMBER.STATUS IS 'Ż�𿩺�(Y/N)';
COMMENT ON COLUMN MEMBER.MANAGER_STATUS IS '�����ڿ���(Y/N)';
COMMENT ON COLUMN MEMBER.MENTOR_STATUS IS '���俩��(Y/N)'; -- �����ڰ� ���� �ο�
COMMENT ON COLUMN MEMBER.MENTOR_VALID IS '����Ȱ������(Y/N)'; -- ������ ������ ���Ƿ� ���� ����
COMMENT ON COLUMN MEMBER.MENTOR_INTRO IS '����Ұ�';
COMMENT ON COLUMN MEMBER.CAREER IS '������';

CREATE TABLE STUDY(
    STUDY_NO NUMBER,
    MANAGER_NO NUMBER NOT NULL,
    STUDY_INFO VARCHAR2(300),
    STUDY_RECRUIT VARCHAR2(3) DEFAULT 'N' NOT NULL CHECK(STUDY_RECRUIT IN('Y','N')),
    CONSTRAINT S_SNO_PK PRIMARY KEY(STUDY_NO),
    CONSTRAINT S_MGNO_FK FOREIGN KEY(MANAGER_NO) REFERENCES MEMBER(MEMBER_NO) ON DELETE CASCADE
);

COMMENT ON COLUMN STUDY.STUDY_NO IS '���͵�׷��ȣ';
COMMENT ON COLUMN STUDY.MANAGER_NO IS '�����ڹ�ȣ';
COMMENT ON COLUMN STUDY.STUDY_INFO IS '���͵�Ұ���';
COMMENT ON COLUMN STUDY.STUDY_RECRUIT IS '��������(Y/N)';

CREATE TABLE STUDY_MEMBER(
    MEMBER_NO NUMBER NOT NULL,
    STUDY_NO NUMBER NOT NULL,
    CONFIRM_DATE DATE DEFAULT NULL, -- NULL�� �̽���, ���ν� ��¥ ����, �źν� ����
    CONSTRAINT SM_MNO_FK FOREIGN KEY(MEMBER_NO) REFERENCES MEMBER(MEMBER_NO) ON DELETE CASCADE,
    CONSTRAINT SM_SNO_FK FOREIGN KEY(STUDY_NO) REFERENCES STUDY(STUDY_NO) ON DELETE CASCADE
);

COMMENT ON COLUMN STUDY_MEMBER.MEMBER_NO IS '���Ը����ȣ';
COMMENT ON COLUMN STUDY_MEMBER.STUDY_NO IS '���Խ��͵��ȣ';
COMMENT ON COLUMN STUDY_MEMBER.CONFIRM_DATE IS '���γ�¥';

CREATE TABLE MESSAGE(
    MESSAGE_NO NUMBER,
    SENDER_NO NUMBER NOT NULL,
    RECEIVER_NO NUMBER,
    STUDY_NO NUMBER,
    MESSAGE_CONTENT VARCHAR(900),
    MESSAGE_DATE DATE DEFAULT SYSDATE NOT NULL,
    CONSTRAINT MSG_MNO_PK PRIMARY KEY(MESSAGE_NO),
    CONSTRAINT MSG_SNO_FK FOREIGN KEY(SENDER_NO) REFERENCES MEMBER(MEMBER_NO) ON DELETE CASCADE,
    CONSTRAINT MSG_RNO_FK FOREIGN KEY(RECEIVER_NO) REFERENCES MEMBER(MEMBER_NO) ON DELETE CASCADE,
    CONSTRAINT MSG_STNO_FK FOREIGN KEY(STUDY_NO) REFERENCES STUDY(STUDY_NO) ON DELETE CASCADE
);

COMMENT ON COLUMN MESSAGE.MESSAGE_NO IS '�޽��� ��ȣ';
COMMENT ON COLUMN MESSAGE.SENDER_NO IS '���������ȣ';
COMMENT ON COLUMN MESSAGE.RECEIVER_NO IS '�޴»����ȣ';
COMMENT ON COLUMN MESSAGE.STUDY_NO IS '�޴½��͵�׷�(���)��ȣ';
COMMENT ON COLUMN MESSAGE.MESSAGE_CONTENT IS '�޽��� ����';
COMMENT ON COLUMN MESSAGE.MESSAGE_DATE IS '�޽����ۼ���';

CREATE TABLE MEMBER_LICENSE(
    LICENSE_NO NUMBER NOT NULL,
    MEMBER_NO NUMBER NOT NULL,
    CONFIRM_DATE DATE DEFAULT NULL, -- NULL�� �̽���, ���ν� ��¥ ����, �źν� ����
    SYMBOL_LICENSE VARCHAR2(3) DEFAULT 'N' CHECK(SYMBOL_LICENSE IN('Y','N')),
    CONSTRAINT ML_PK PRIMARY KEY(LICENSE_NO,MEMBER_NO),
    CONSTRAINT ML_LNO_FK FOREIGN KEY(LICENSE_NO) REFERENCES LICENSE(LICENSE_NO) ON DELETE CASCADE,
    CONSTRAINT ML_MNO_FK FOREIGN KEY(MEMBER_NO) REFERENCES MEMBER(MEMBER_NO) ON DELETE CASCADE
);

COMMENT ON COLUMN MEMBER_LICENSE.LICENSE_NO IS '�����ڰ�����ȣ';
COMMENT ON COLUMN MEMBER_LICENSE.MEMBER_NO IS '�����ȣ';
COMMENT ON COLUMN MEMBER_LICENSE.CONFIRM_DATE IS '���γ�¥';
COMMENT ON COLUMN MEMBER_LICENSE.SYMBOL_LICENSE IS '��ǥ�ڰ���(Y/N)';

CREATE TABLE MEMBER_LOOK_LICENSE(
    MEMBER_NO NUMBER NOT NULL,
    LICENSE_NO NUMBER NOT NULL,
    CONSTRAINT MLL_PK PRIMARY KEY(MEMBER_NO, LICENSE_NO),
    CONSTRAINT MLL_MNO_FK FOREIGN KEY(MEMBER_NO) REFERENCES MEMBER(MEMBER_NO) ON DELETE CASCADE,
    CONSTRAINT MLL_LNO_FK FOREIGN KEY(LICENSE_NO) REFERENCES LICENSE(LICENSE_NO) ON DELETE CASCADE
);

COMMENT ON COLUMN MEMBER_LOOK_LICENSE.MEMBER_NO IS '�����ȣ';
COMMENT ON COLUMN MEMBER_LOOK_LICENSE.LICENSE_NO IS '�����ڰ�����ȣ';

CREATE TABLE MEMBER_CALENDAR(
    CALENDAR_NO NUMBER,
    MEMBER_NO NUMBER NOT NULL,
    START_DATE DATE NOT NULL,
    END_DATE DATE NOT NULL,
    CALENDAR_DETAIL VARCHAR2(300),
    CONSTRAINT MC_CNO_PK PRIMARY KEY(CALENDAR_NO),
    CONSTRAINT MC_MNO_FK FOREIGN KEY(MEMBER_NO) REFERENCES MEMBER(MEMBER_NO) ON DELETE CASCADE
);

COMMENT ON COLUMN MEMBER_CALENDAR.CALENDAR_NO IS '����������ȣ';
COMMENT ON COLUMN MEMBER_CALENDAR.MEMBER_NO IS '�����ȣ';
COMMENT ON COLUMN MEMBER_CALENDAR.START_DATE IS '�������۳�¥';
COMMENT ON COLUMN MEMBER_CALENDAR.END_DATE IS '����������¥';
COMMENT ON COLUMN MEMBER_CALENDAR.CALENDAR_DETAIL IS '��������';

CREATE TABLE MENTOR_LIKE_LOG(
    MEMBER_NO NUMBER NOT NULL,
    MENTOR_NO NUMBER NOT NULL,
    CONSTRAINT MTLL_PK PRIMARY KEY(MEMBER_NO, MENTOR_NO),
    CONSTRAINT MTLL_MNO_FK FOREIGN KEY(MEMBER_NO) REFERENCES MEMBER(MEMBER_NO) ON DELETE CASCADE,
    CONSTRAINT MTLL_MTNO_FK FOREIGN KEY(MENTOR_NO) REFERENCES MEMBER(MEMBER_NO) ON DELETE CASCADE
);

COMMENT ON COLUMN MENTOR_LIKE_LOG.MEMBER_NO IS '�����ȣ';
COMMENT ON COLUMN MENTOR_LIKE_LOG.MENTOR_NO IS '�����ȣ';

CREATE TABLE ALERT(
    ALERT_NO NUMBER,
    MEMBER_NO NUMBER NOT NULL,
    ALERT_DETAIL VARCHAR2(300) NOT NULL,
    CONSTRAINT AL_ANO_PK PRIMARY KEY(ALERT_NO),
    CONSTRAINT AL_MNO_FK FOREIGN KEY(MEMBER_NO) REFERENCES MEMBER(MEMBER_NO) ON DELETE CASCADE
);

COMMENT ON COLUMN ALERT.ALERT_NO IS '�˸�������ȣ';
COMMENT ON COLUMN ALERT.MEMBER_NO IS '�����ȣ';
COMMENT ON COLUMN ALERT.ALERT_DETAIL IS '�˸�����';

CREATE TABLE COMPILER_LOG(
    COMPILE_NO NUMBER,
    MEMBER_NO NUMBER NOT NULL,
    CODE VARCHAR(3000),
    COMPILE_DATE DATE DEFAULT SYSDATE NOT NULL,
    CONSTRAINT CL_CNO_PK PRIMARY KEY(COMPILE_NO),
    CONSTRAINT CL_MNO_FK FOREIGN KEY(MEMBER_NO) REFERENCES MEMBER(MEMBER_NO) ON DELETE CASCADE
);

COMMENT ON COLUMN COMPILER_LOG.COMPILE_NO IS '�α׹�ȣ';
COMMENT ON COLUMN COMPILER_LOG.MEMBER_NO IS '�����ȣ';
COMMENT ON COLUMN COMPILER_LOG.CODE IS '�ڵ峻��';
COMMENT ON COLUMN COMPILER_LOG.COMPILE_DATE IS '�ۼ��ð�';

CREATE TABLE DATA_BOARD(
    DATA_BOARD_NO NUMBER,
    MEMBER_NO NUMBER NOT NULL,
    DATA_BOARD_TITLE VARCHAR2(300) NOT NULL,
    DATA_BOARD_CONTENT VARCHAR2(3000),
    BOARD_DATE DATE DEFAULT SYSDATE NOT NULL,
    VIEW_COUNT NUMBER DEFAULT 0,
    CONSTRAINT DB_BNO_PK PRIMARY KEY(DATA_BOARD_NO),
    CONSTRAINT DB_MNO_FK FOREIGN KEY(MEMBER_NO) REFERENCES MEMBER(MEMBER_NO) ON DELETE CASCADE
);

COMMENT ON COLUMN DATA_BOARD.DATA_BOARD_NO IS '�ڷ�Խñ۹�ȣ';
COMMENT ON COLUMN DATA_BOARD.MEMBER_NO IS '�����ȣ';
COMMENT ON COLUMN DATA_BOARD.DATA_BOARD_TITLE IS '�Խñ�����';
COMMENT ON COLUMN DATA_BOARD.DATA_BOARD_CONTENT IS '�Խñ۳���';
COMMENT ON COLUMN DATA_BOARD.BOARD_DATE IS '�ۼ��ð�';
COMMENT ON COLUMN DATA_BOARD.VIEW_COUNT IS '��ȸ��';

CREATE TABLE DATA_BOARD_ATTACH(
    DATA_BOARD_ATT_NO NUMBER,
    DATA_BOARD_NO NUMBER,
    DATA_BOARD_ATT_PATH VARCHAR2(300),
    CONSTRAINT DBA_DBANO_PK PRIMARY KEY(DATA_BOARD_ATT_NO),
    CONSTRAINT DBA_DBNO_FK FOREIGN KEY(DATA_BOARD_NO) REFERENCES DATA_BOARD(DATA_BOARD_NO) ON DELETE CASCADE
);

COMMENT ON COLUMN DATA_BOARD_ATTACH.DATA_BOARD_ATT_NO IS '�ڷ� ��ȣ';
COMMENT ON COLUMN DATA_BOARD_ATTACH.DATA_BOARD_NO IS '�ڷ� �Խñ� ��ȣ';
COMMENT ON COLUMN DATA_BOARD_ATTACH.DATA_BOARD_ATT_PATH IS '�ڷ� ���';

CREATE TABLE BOARD(
    BOARD_NO NUMBER,
    TAB_NO NUMBER NOT NULL,
    LICENSE_NO NUMBER NOT NULL,
    MEMBER_NO NUMBER NOT NULL,
    BOARD_TITLE VARCHAR2(300) NOT NULL,
    BOARD_CONTENT VARCHAR2(3000),
    BOARD_DATE DATE DEFAULT SYSDATE NOT NULL,
    LIKE_COUNT NUMBER DEFAULT 0,
    HATE_COUNT NUMBER DEFAULT 0,
    STATUS VARCHAR2(3) DEFAULT 'Y' CHECK( STATUS IN ('Y','N')),
    VIEW_COUNT NUMBER DEFAULT 0,
    CONSTRAINT B_BNO_PK PRIMARY KEY(BOARD_NO),
    CONSTRAINT B_TNO_FK FOREIGN KEY(TAB_NO) REFERENCES BOARD_TAB(TAB_NO) ON DELETE CASCADE,
    CONSTRAINT B_LNO_FK FOREIGN KEY(LICENSE_NO) REFERENCES LICENSE(LICENSE_NO) ON DELETE CASCADE,
    CONSTRAINT B_MNO_FK FOREIGN KEY(MEMBER_NO) REFERENCES MEMBER(MEMBER_NO) ON DELETE CASCADE
);

COMMENT ON COLUMN BOARD.BOARD_NO IS '�Խñ۹�ȣ';
COMMENT ON COLUMN BOARD.TAB_NO IS '�ǹ�ȣ';
COMMENT ON COLUMN BOARD.LICENSE_NO IS '�ڰ����Խ��ǹ�ȣ';
COMMENT ON COLUMN BOARD.MEMBER_NO IS '�ۼ��ڹ�ȣ';
COMMENT ON COLUMN BOARD.BOARD_TITLE IS '������';
COMMENT ON COLUMN BOARD.BOARD_CONTENT IS '�۳���';
COMMENT ON COLUMN BOARD.BOARD_DATE IS '�۾���¥';
COMMENT ON COLUMN BOARD.LIKE_COUNT IS '���ƿ��';
COMMENT ON COLUMN BOARD.HATE_COUNT IS '�Ⱦ���';
COMMENT ON COLUMN BOARD.STATUS IS '��������(Y/N)';
COMMENT ON COLUMN BOARD.VIEW_COUNT IS '��ȸ��';

CREATE TABLE REPLY(
    REPLY_NO NUMBER,
    BOARD_NO NUMBER NOT NULL,
    REPLY_PNO NUMBER,
    MEMBER_NO NUMBER NOT NULL,
    STATUS VARCHAR2(3) DEFAULT 'Y' CHECK( STATUS IN ('Y','N')),
    REPLY_GROUP NUMBER DEFAULT 0,
    REPLY_DEPTH NUMBER DEFAULT 0,
    REPLY_ORDER NUMBER DEFAULT 0,
    CHILD_COUNT NUMBER DEFAULT 0,
    CONSTRAINT RP_RNO_PK PRIMARY KEY(REPLY_NO),
    CONSTRAINT RP_BNO_FK FOREIGN KEY(BOARD_NO) REFERENCES BOARD(BOARD_NO) ON DELETE CASCADE,
    CONSTRAINT RP_MNO_FK FOREIGN KEY(MEMBER_NO) REFERENCES MEMBER(MEMBER_NO) ON DELETE CASCADE,
    CONSTRAINT RP_RNO_FK FOREIGN KEY(REPLY_PNO) REFERENCES REPLY(REPLY_NO) ON DELETE CASCADE
);

COMMENT ON COLUMN REPLY.REPLY_NO IS '��۹�ȣ';
COMMENT ON COLUMN REPLY.BOARD_NO IS '�Խñ۹�ȣ';
COMMENT ON COLUMN REPLY.REPLY_PNO IS '�θ��۹�ȣ';
COMMENT ON COLUMN REPLY.MEMBER_NO IS '�ۼ��ڹ�ȣ';
COMMENT ON COLUMN REPLY.STATUS IS '��������(Y/N)';
COMMENT ON COLUMN REPLY.REPLY_GROUP IS '��۱׷�';
COMMENT ON COLUMN REPLY.REPLY_DEPTH IS '���� ���α���';
COMMENT ON COLUMN REPLY.REPLY_ORDER IS '���� ����(����)';
COMMENT ON COLUMN REPLY.CHILD_COUNT IS '�޸� ���� ��';

CREATE TABLE BOARD_LIKE_LOG(
    BOARD_NO NUMBER NOT NULL,
    MEMBER_NO NUMBER NOT NULL,
    CONSTRAINT BLLOG_PK PRIMARY KEY(BOARD_NO, MEMBER_NO),
    CONSTRAINT BLLOG_BNO_FK FOREIGN KEY(BOARD_NO) REFERENCES BOARD(BOARD_NO) ON DELETE CASCADE,
    CONSTRAINT BLLOG_MNO_FK FOREIGN KEY(MEMBER_NO) REFERENCES MEMBER(MEMBER_NO) ON DELETE CASCADE
);

COMMENT ON COLUMN BOARD_LIKE_LOG.BOARD_NO IS '���ƿ� ���� �Խñ۹�ȣ';
COMMENT ON COLUMN BOARD_LIKE_LOG.BOARD_NO IS '���ƿ� ���� �����ȣ';

CREATE TABLE BOARD_HATE_LOG(
    BOARD_NO NUMBER NOT NULL,
    MEMBER_NO NUMBER NOT NULL,
    CONSTRAINT BHLOG_PK PRIMARY KEY(BOARD_NO, MEMBER_NO),
    CONSTRAINT BHLOG_BNO_FK FOREIGN KEY(BOARD_NO) REFERENCES BOARD(BOARD_NO) ON DELETE CASCADE,
    CONSTRAINT BHLOG_MNO_FK FOREIGN KEY(MEMBER_NO) REFERENCES MEMBER(MEMBER_NO) ON DELETE CASCADE
);

COMMENT ON COLUMN BOARD_HATE_LOG.BOARD_NO IS '�Ⱦ�� ���� �Խñ۹�ȣ';
COMMENT ON COLUMN BOARD_HATE_LOG.BOARD_NO IS '�Ⱦ�� ���� �����ȣ';

CREATE TABLE STUDY_BOARD(
    STUDY_BOARD_NO NUMBER,
    STUDY_NO NUMBER NOT NULL,
    STUDY_BOARD_TITLE VARCHAR2(300) NOT NULL,
    STUDY_BOARD_CONTENT VARCHAR2(3000),
    VIEW_COUNT NUMBER DEFAULT 0,
    STUDY_BOARD_DATE DATE DEFAULT SYSDATE NOT NULL,
    CONSTRAINT SB_SBNO_PK PRIMARY KEY(STUDY_BOARD_NO),
    CONSTRAINT SB_SNO_FK FOREIGN KEY(STUDY_NO) REFERENCES STUDY(STUDY_NO)
);

COMMENT ON COLUMN STUDY_BOARD.STUDY_BOARD_NO IS '���� �Խñ� ��ȣ';
COMMENT ON COLUMN STUDY_BOARD.STUDY_NO IS '���͵�׷��ȣ';
COMMENT ON COLUMN STUDY_BOARD.STUDY_BOARD_TITLE IS '������ ����';
COMMENT ON COLUMN STUDY_BOARD.STUDY_BOARD_CONTENT IS '������ ����';
COMMENT ON COLUMN STUDY_BOARD.VIEW_COUNT IS '��ȸ��';
COMMENT ON COLUMN STUDY_BOARD.STUDY_BOARD_DATE IS '�ۼ���';

CREATE TABLE BOARD_IMG(
    IMG_NO NUMBER,
    BOARD_NO NUMBER,
    STUDY_BOARD_NO NUMBER,
    IMG_PATH VARCHAR2(300) NOT NULL,
    CONSTRAINT BIMG_INO_PK PRIMARY KEY(IMG_NO),
    CONSTRAINT BIMG_BNO_FK FOREIGN KEY(BOARD_NO) REFERENCES BOARD(BOARD_NO) ON DELETE CASCADE,
    CONSTRAINT BIMG_SBNO_FK FOREIGN KEY(STUDY_BOARD_NO) REFERENCES STUDY_BOARD(STUDY_BOARD_NO) ON DELETE CASCADE
);

COMMENT ON COLUMN BOARD_IMG.IMG_NO IS '�̹�����ȣ';
COMMENT ON COLUMN BOARD_IMG.BOARD_NO IS '�Խñ۹�ȣ';
COMMENT ON COLUMN BOARD_IMG.STUDY_BOARD_NO IS '���͵������ ��ȣ';
COMMENT ON COLUMN BOARD_IMG.IMG_PATH IS '�̹������';

CREATE TABLE REPORT_TYPE(
    REPORT_TYPE_NO NUMBER,
    REPORT_TYPE_DETAIL VARCHAR2(120) NOT NULL,
    CONSTRAINT RT_RTNO_PK PRIMARY KEY(REPORT_TYPE_NO)
);

COMMENT ON COLUMN REPORT_TYPE.REPORT_TYPE_NO IS '�Ű�������ȣ';
COMMENT ON COLUMN REPORT_TYPE.REPORT_TYPE_DETAIL IS '�Ű���������';

CREATE TABLE REPORT(
    REPORT_NO NUMBER,
    ACCUSER_NO NUMBER NOT NULL,
    ACCUSED_NO NUMBER NOT NULL,
    BOARD_NO NUMBER,
    REPLY_NO NUMBER,
    MESSAGE_NO NUMBER,
    STUDY_BOARD_NO NUMBER,
    REPORT_TYPE_NO NUMBER,
    REPORT_DETAIL VARCHAR2(300),
    CONSTRAINT RPT_RNO_PK PRIMARY KEY(REPORT_NO),
    CONSTRAINT RPT_ACRNO_FK FOREIGN KEY(ACCUSER_NO) REFERENCES MEMBER(MEMBER_NO),
    CONSTRAINT RPT_ACDNO_FK FOREIGN KEY(ACCUSED_NO) REFERENCES MEMBER(MEMBER_NO),
    CONSTRAINT RPT_BNO_FK FOREIGN KEY(BOARD_NO) REFERENCES BOARD(BOARD_NO),
    CONSTRAINT RPT_RNO_FK FOREIGN KEY(REPLY_NO) REFERENCES REPLY(REPLY_NO),
    CONSTRAINT RPT_MSGNO_FK FOREIGN KEY(MESSAGE_NO) REFERENCES MESSAGE(MESSAGE_NO),
    CONSTRAINT RPT_SBNO_FK FOREIGN KEY(STUDY_BOARD_NO) REFERENCES STUDY_BOARD(STUDY_BOARD_NO),
    CONSTRAINT RPT_RTNO_FK FOREIGN KEY(REPORT_TYPE_NO) REFERENCES REPORT_TYPE(REPORT_TYPE_NO)
);

COMMENT ON COLUMN REPORT.REPORT_NO IS '�Ű���ȣ';
COMMENT ON COLUMN REPORT.ACCUSER_NO IS '�Ű��ι�ȣ';
COMMENT ON COLUMN REPORT.ACCUSED_NO IS '�ǽŰ��ι�ȣ';
COMMENT ON COLUMN REPORT.BOARD_NO IS 'Ŀ�´�Ƽ�Խ��ǹ�ȣ';
COMMENT ON COLUMN REPORT.REPLY_NO IS '��۹�ȣ';
COMMENT ON COLUMN REPORT.MESSAGE_NO IS '�޽�����ȣ';
COMMENT ON COLUMN REPORT.STUDY_BOARD_NO IS '���͵�����Խñ۹�ȣ';
COMMENT ON COLUMN REPORT.REPORT_TYPE_NO IS '�Ű�������ȣ';
COMMENT ON COLUMN REPORT.REPORT_DETAIL IS '�Ű����γ���';

-- ������ ����
CREATE SEQUENCE BOARD_TAB_SEQ;
CREATE SEQUENCE BOARD_SEQ;
CREATE SEQUENCE BOARD_IMG_SEQ;
CREATE SEQUENCE REPLY_SEQ;
CREATE SEQUENCE LICENSE_SEQ;
CREATE SEQUENCE MEMBER_SEQ;
CREATE SEQUENCE STUDY_SEQ;
CREATE SEQUENCE STUDY_BOARD_SEQ;
CREATE SEQUENCE REPORT_SEQ;
CREATE SEQUENCE REPORT_TYPE_SEQ;
CREATE SEQUENCE COMPILE_SEQ;
CREATE SEQUENCE CALENDAR_SEQ;
CREATE SEQUENCE MENTOR_LIKE_LOG_SEQ;
CREATE SEQUENCE ALERT_SEQ;
CREATE SEQUENCE MESSAGE_SEQ;
CREATE SEQUENCE DATA_BOARD_ATT_SEQ;
CREATE SEQUENCE DATA_BOARD_SEQ;

-- �⺻�� ����
INSERT INTO BOARD_TAB VALUES(BOARD_TAB_SEQ.NEXTVAL, '����');
INSERT INTO BOARD_TAB VALUES(BOARD_TAB_SEQ.NEXTVAL, '����');
INSERT INTO BOARD_TAB VALUES(BOARD_TAB_SEQ.NEXTVAL, '����(����)');
INSERT INTO BOARD_TAB VALUES(BOARD_TAB_SEQ.NEXTVAL, '����(�ڵ�)');
INSERT INTO BOARD_TAB VALUES(BOARD_TAB_SEQ.NEXTVAL, '�ı�');
INSERT INTO BOARD_TAB VALUES(BOARD_TAB_SEQ.NEXTVAL, '������/���� ��õ');
INSERT INTO BOARD_TAB VALUES(BOARD_TAB_SEQ.NEXTVAL, '������ �ŷ�');

INSERT INTO LICENSE VALUES(LICENSE_SEQ.NEXTVAL,'����ó�����','<�Ǳ���� ���� ����>


�����ý��� ���� ���� �䱸 ������ �����Ͽ� �� ������ �´� ����Ʈ������ ��ɿ� ���� ����, ���� �� �׽�Ʈ�� ���࿡ �ʿ��� 

1. ���� �ý��� �м� �� �䱸���� Ȯ��(����Ʈ���� ���� ����� �䱸���� �м� ��� Ȱ��)

2. ������ ����� ����(����, ���������ͺ��̽� ����, ���� ���ν��� ��)

3. ���� ����(����Ʈ����� ���� ��� ��Ⱓ�� Ư�� �� ���� ��� ���� ��)

4. �������α׷� ����(����Ʈ���� ���� ȯ�� ����, ���� ����, ���� ���, �׽�Ʈ ���� ��)

5. �������̽� ����(����Ʈ���� ���� ����, ����Ʈ���� �������̽� ����, ��� ����, �������� ��)

6. ȭ�鼳��(UI �䱸���� �� ����, ǥ�� ������ Ÿ�� ���� ��)

7. ���ø����̼� �׽�Ʈ (�׽�Ʈ ���̽� ����, ���� �׽�Ʈ, ���� ���� ��)

8. SQL ����(SQL �ۼ� ��)

9. ����Ʈ���� ���� ���� ����(SW ���� ���� ����, SW���� ���� ���� ��)

10. ���α׷��� ���Ȱ��(�⺻ ���� ��)

11. ���� SW���� ��� Ȱ��(�ü��, �����ͺ��̽� Ȱ��, ��Ʈ��ũ Ȱ��, ����ȯ�� ���� ��)

12. ��ǰ ����Ʈ���� ��Ű¡(��ǰ ����Ʈ���� ��Ű¡, ��ǰ����Ʈ���� �Ŵ��� �ۼ� , ���� ������ )

<���� �� ����>

- �ʱ������ ������ �������� > �ڷ���� ���������� ���� �ٶ��ϴ�.

- �Ǳ������ �ʴ����� ����Ǹ� ��������> �ڷ���� ���������� ���� �ٶ��ϴ�.

  �������� ����(www.q-net.or.kr)');
INSERT INTO LICENSE VALUES(LICENSE_SEQ.NEXTVAL,'��Ʈ��ũ������','��Ʈ��ũ������� ������ �����ϰ� ���� ����, �ý��� ����ȭ �� ��Ʈ��ũ���� �� �̸� ȿ�������� ������ �� �ִ� ���ͳ� ���� ����¿� ���� �ڰ��̴�.');
INSERT INTO LICENSE VALUES(LICENSE_SEQ.NEXTVAL,'�������ȱ��','�������ȱ��(Engineer information security)�� ���б��������źο��� �ְ��ϰ� �ѱ����������������[1]���� �����ϴ� �����ڰ� ���� �� �� �ڰ����� �ǹ��Ѵ�. ���� �ѱ����ͳ������ ���� ���� �ΰ� �ڰ����� ������ȣ������(SIS) �ڰ����� ���� ��� �ڰ����� ���׷��̵��Ų �ڰ��̴�.[2] ������ȣ�������� 2001�� �ż��ǰ� 2005�� ���� ������ �޾�����, 2013����� ��������(���)����� �ż��� �����Ǹ鼭 2012���� ������ �����Ǿ���. 2013����� �����Ͽ� �� 2ȸ�� ������ ���ٰ�, 2022����ʹ� �� 3ȸ�� ���� �����ϴ�. 2022�� 2ȸ���� �ʱ⿡�� PBT�� CBT�� ���ÿ� �����ϴٰ�, 2024����� 100% CBT�� ��ȯ�� �����̴�.
');
INSERT INTO LICENSE VALUES(LICENSE_SEQ.NEXTVAL,'�����ͺм����','2019�� â���� ���ѹα��� ����� ��������ڰ�.
�ֹ���ó�� ���б��������źο� ���û�̸� ������������ �ѱ������ͻ�������(K-DATA)�̴�.

4�� ������� �ô븦 �¾� �����ͺм� �����η� ���޿� �ַ��ϱ� ���� ���ߵǾ���. �����Ϳ� �����Ͽ� ���ɰ� ���䰡 �����ѵ� ���� �ʿ��� ����, ���, ���� ���� ���� ���� ������ �ΰ� �ڰ����� �����ϰ� �ִ� ��Ȳ�� �ذ��ϱ� ���� �ż��Ǿ���.

�ѱ������ͻ����������� �����ϴ� ADP, ADsP�� �����ͺм����� ��� ���� ������ ���������� �� ���̵��� ���̰� �ִ�. ADsP < �����ͺм���� < ADP ������ �Ǳ������ ���� ADsP�� ���� ����, ADP�� �����ͺм���纸�� �ξ� ����� �Ǳ������ �����ȴ�. �����ͺм���縦 ����ߴٸ� ADsP�� �ߺ��̶� �ʿ������ ADP �����ڰ��� ���߱� ���� ������ ���� �ִ�[1].

�����ͺм���� ������ 2021�� 4�� 17�� ù ������ ġ����, 1�⿡ 2ȸ �ǽ��Ѵ�. �ڰ������� ���б��������ź������ ���û���� ���� ���´�. �ڰ����� �������� ī���� �ǹ��ڰ������� �߱޵ȴ�. ī������ 2023����� �߱��� ������������ �߱޺������ �� 6õ�� ������ �޴´�. �߱ޱ����� �� 2�� ���� �ҿ�ȴ�.');

INSERT INTO REPORT_TYPE VALUES(REPORT_TYPE_SEQ.NEXTVAL,'ȫ��/����');
INSERT INTO REPORT_TYPE VALUES(REPORT_TYPE_SEQ.NEXTVAL,'������');
INSERT INTO REPORT_TYPE VALUES(REPORT_TYPE_SEQ.NEXTVAL,'�ҹ�');
INSERT INTO REPORT_TYPE VALUES(REPORT_TYPE_SEQ.NEXTVAL,'�弳');
INSERT INTO REPORT_TYPE VALUES(REPORT_TYPE_SEQ.NEXTVAL,'�����߾�');
INSERT INTO REPORT_TYPE VALUES(REPORT_TYPE_SEQ.NEXTVAL,'��Ī');
INSERT INTO REPORT_TYPE VALUES(REPORT_TYPE_SEQ.NEXTVAL,'������ �� ������');
INSERT INTO REPORT_TYPE VALUES(REPORT_TYPE_SEQ.NEXTVAL,'��Ÿ');

INSERT INTO MEMBER(MEMBER_NO, MEMBER_ID, MEMBER_PWD, MEMBER_NAME,
                    MEMBER_NICKNAME, EMAIL, PHONE, MANAGER_STATUS)
VALUES(MEMBER_SEQ.NEXTVAL,'admin','admin','������',
    'Admin','admin@naver.com','010-1234-5678','Y');
    
INSERT INTO MEMBER(MEMBER_NO, MEMBER_ID, MEMBER_PWD, MEMBER_NAME,
                    MEMBER_NICKNAME, EMAIL, PHONE)
VALUES(MEMBER_SEQ.NEXTVAL,'user01','pass01','�赿��',
    'user01','rlaehddud9502@naver.com','010-1111-1111');
    
INSERT INTO MEMBER(MEMBER_NO, MEMBER_ID, MEMBER_PWD, MEMBER_NAME,
                    MEMBER_NICKNAME, EMAIL, PHONE)
VALUES(MEMBER_SEQ.NEXTVAL,'user02','pass02','������',
    'user02','user02@naver.com','010-2222-2222');

INSERT INTO MEMBER(MEMBER_NO, MEMBER_ID, MEMBER_PWD, MEMBER_NAME,
                    MEMBER_NICKNAME, EMAIL, PHONE)
VALUES(MEMBER_SEQ.NEXTVAL,'user03','pass03','������',
    'user03','user03@naver.com','010-3333-3333');
    
INSERT INTO MEMBER(MEMBER_NO, MEMBER_ID, MEMBER_PWD, MEMBER_NAME,
                    MEMBER_NICKNAME, EMAIL, PHONE)
VALUES(MEMBER_SEQ.NEXTVAL,'user04','pass04','�ڻ���',
    'user04','user04@naver.com','010-4444-4444');