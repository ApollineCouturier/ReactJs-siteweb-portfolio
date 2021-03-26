import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import logo from '../img/logoApolline.jpg';

function AboutPage() {
    return(
        <div className="AboutPage">
            <Tittle title={'Sur Moi'} span={'Sur Moi'} />
            <ImageSection />
            <Tittle title={'Compétences'} span={'Compétences'} />
            <div className="skills-container">
                <SkillsSection type={'top'} skill={'Javascript'} progress={'40%'} width={'40%'} logo={"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0U0QkE0MjsiIGQ9Ik01MTIsMjU2YzAsMzMuMzUzLTYuMzc0LDY1LjIxMi0xNy45ODMsOTQuNDM4Yy02LjIwNywxNS42MzItMTMuOTA4LDMwLjUxMS0yMi45MzYsNDQuNDUNCgljLTExLjI0MywxNy4zODctMjQuNTQ1LDMzLjMyMi0zOS41NDksNDcuNDQ5Yy04Ljc4OCw4LjI4Ni0xOC4xNSwxNS45NDUtMjguMDM1LDIyLjkyNUMzNjEuODA2LDQ5NC43MDcsMzEwLjkzLDUxMiwyNTYsNTEyDQoJcy0xMDUuODA2LTE3LjI5My0xNDcuNDk4LTQ2LjczOGMtMTIuMzcyLTguNzM1LTIzLjkyOC0xOC41MjYtMzQuNTM0LTI5LjI2OEMyOC4yMzMsMzg5Ljc1NywwLDMyNi4xNjUsMCwyNTYNCglTMjguMjMzLDEyMi4yNDMsNzMuOTY4LDc2LjAwNmMxMS4yMzMtMTEuMzY4LDIzLjUzMS0yMS42ODIsMzYuNzI4LTMwLjc5M0MxNTEuOTcsMTYuNjk3LDIwMi4wMzEsMCwyNTYsMA0KCXMxMDQuMDMsMTYuNjk3LDE0NS4zMDQsNDUuMjEzYzEwLjA4Myw2Ljk0OSwxOS42MzQsMTQuNjE4LDI4LjU4OCwyMi45MjVjMTUuNjg0LDE0LjUwMywyOS41MzksMzAuOTYsNDEuMTksNDguOTc0DQoJYzkuMDI4LDEzLjkzOSwxNi43MjksMjguODE4LDIyLjkzNiw0NC40NUM1MDUuNjI2LDE5MC43ODgsNTEyLDIyMi42NDcsNTEyLDI1NnoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGMkYyRjI7IiBkPSJNMzkxLjA1LDIzMi45N2MtNy4xMjUtMjAuNjY0LTM2LjM0MS0yMC42NjQtNDIuMDQtMy41NjNjLTUuNywxNy4xMDEsMTMuNTM5LDI3LjA3Niw0My40NjYsMzcuMDUzDQoJCWMyOS45MjcsOS45NzYsNDguNDU0LDM2LjM0MSw0NC44OTEsNTkuODU0cy0xMy41MzksNTQuMTU0LTcyLjY4LDU0LjE1NGMtMzYuOTYzLDAtNTcuNTA1LTIzLjEwMy02Ny43MTQtNDAuNDI5bDMzLjUxMS0yMC4xMzgNCgkJYzAsMCwxMS40MDEsMjQuMjI3LDMyLjc3NywyNC4yMjdjMjEuMzc3LDAsMjkuOTI3LTcuMTI1LDI5LjkyNy0yMy41MTRjMC0xOS45NTEtNjkuMTE4LTI3LjA3Ni03OS44MDYtNjEuMjc5DQoJCXMzLjU2My04Mi42NTYsNTMuNDQxLTc5LjA5NGMzMS4xNzUsMi4yMjcsNDguNzEsMTcuNTM1LDU3LjQ3OCwyOC43MDNMMzkxLjA1LDIzMi45N3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjJGMkYyOyIgZD0iTTIzNS43MTQsMTgzLjgwNWMwLDAsMCwxMjAuNDIxLDAsMTM2LjgxYzAsMTYuMzg4LTE0LjI1MSwyNC45NC0yOC41MDIsMjIuMDg5DQoJCWMtMTQuMjUxLTIuODUtMjAuNjY0LTE5Ljk1MS0yMC42NjQtMTkuOTUxbC0zMi43NzcsMjIuMDg5YzAsMCw3LjEyNSwzMi43NzcsNTIuMDE2LDM1LjYyOA0KCQljNDQuODkxLDIuODUsNzAuNTQyLTI0LjIyNyw3MC41NDItNDcuMDI5czAtMTQ5LjYzNiwwLTE0OS42MzZMMjM1LjcxNCwxODMuODA1TDIzNS43MTQsMTgzLjgwNXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjJGMkYyOyIgZD0iTTczLjk2OCw0NS4yMTN2MzkwLjc4MWMxMC42MDYsMTAuNzQyLDIyLjE2MiwyMC41MzIsMzQuNTM0LDI5LjI2OGgyOTQuOTk2DQoJCWM5Ljg4NS02Ljk4LDE5LjI0Ny0xNC42MzksMjguMDM1LTIyLjkyNUg5Ni44OTNWNjguMTM4aDM3NC4xODh2MzI2Ljc1YzkuMDI4LTEzLjkzOSwxNi43MjktMjguODE4LDIyLjkzNi00NC40NVY0NS4yMTNINzMuOTY4eiIvPg0KPC9nPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojM0Y0QTQzOyIgY3g9Ijg3Ljg1NSIgY3k9IjMzOS4xNDMiIHI9IjQwLjYxNSIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="} />
                <SkillsSection type={'top'} skill={'HTML'} progress={'80%'} width={'80%'} logo={"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzNzQ3NEY7IiBkPSJNMTA2LjY4OSwwLjAwMWMtNS44OTEsMC0xMC42NjcsNC43NzYtMTAuNjY3LDEwLjY2N3Y0Mi42NjdjMCw1Ljg5MSw0Ljc3NiwxMC42NjcsMTAuNjY3LDEwLjY2Nw0KCQljNS44OTEsMCwxMC42NjctNC43NzYsMTAuNjY3LTEwLjY2N1YxMC42NjdDMTE3LjM1Niw0Ljc3NiwxMTIuNTgsMC4wMDEsMTA2LjY4OSwwLjAwMXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMzc0NzRGOyIgZD0iTTE0OS4zNTUsNDIuNjY3aC00Mi42NjdjLTUuODkxLDAtMTAuNjY3LTQuNzc2LTEwLjY2Ny0xMC42NjdzNC43NzYtMTAuNjY3LDEwLjY2Ny0xMC42NjdoNDIuNjY3DQoJCWM1Ljg5MSwwLDEwLjY2Nyw0Ljc3NiwxMC42NjcsMTAuNjY3UzE1NS4yNDcsNDIuNjY3LDE0OS4zNTUsNDIuNjY3eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzNzQ3NEY7IiBkPSJNMTQ5LjM1NSw2NC4wMDFjLTUuODkxLDAtMTAuNjY3LTQuNzc2LTEwLjY2Ny0xMC42NjdWMTAuNjY3YzAtNS44OTEsNC43NzYtMTAuNjY3LDEwLjY2Ny0xMC42NjcNCgkJYzUuODkxLDAsMTAuNjY3LDQuNzc2LDEwLjY2NywxMC42Njd2NDIuNjY3QzE2MC4wMjIsNTkuMjI1LDE1NS4yNDcsNjQuMDAxLDE0OS4zNTUsNjQuMDAxeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzNzQ3NEY7IiBkPSJNMjM0LjY4OSwyMS4zMzRoLTQyLjY2N2MtNS44OTEsMC0xMC42NjctNC43NzYtMTAuNjY3LTEwLjY2N3M0Ljc3Ni0xMC42NjcsMTAuNjY3LTEwLjY2N2g0Mi42NjcNCgkJYzUuODkxLDAsMTAuNjY3LDQuNzc2LDEwLjY2NywxMC42NjdTMjQwLjU4LDIxLjMzNCwyMzQuNjg5LDIxLjMzNHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMzc0NzRGOyIgZD0iTTIxMy4zNTUsNjQuMDAxYy01Ljg5MSwwLTEwLjY2Ny00Ljc3Ni0xMC42NjctMTAuNjY3VjEwLjY2N2MwLTUuODkxLDQuNzc2LTEwLjY2NywxMC42NjctMTAuNjY3DQoJCWM1Ljg5MSwwLDEwLjY2Nyw0Ljc3NiwxMC42NjcsMTAuNjY3djQyLjY2N0MyMjQuMDIyLDU5LjIyNSwyMTkuMjQ3LDY0LjAwMSwyMTMuMzU1LDY0LjAwMXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMzc0NzRGOyIgZD0iTTM0MS4zNTUsNjQuMDAxYy01Ljg5MSwwLTEwLjY2Ny00Ljc3Ni0xMC42NjctMTAuNjY3VjQyLjY2N2wtMTIuOCwxNy4wNjcNCgkJYy0zLjg3OCw0LjcxMy0xMC44NDIsNS4zOS0xNS41NTUsMS41MTJjLTAuNTUyLTAuNDU0LTEuMDU4LTAuOTYtMS41MTItMS41MTJsLTEyLjgtMTcuMDY3djEwLjY2Nw0KCQljMCw1Ljg5MS00Ljc3NiwxMC42NjctMTAuNjY3LDEwLjY2N2MtNS44OTEsMC0xMC42NjctNC43NzYtMTAuNjY3LTEwLjY2N1YxMC42NjdjMC01Ljg5MSw0Ljc3Ni0xMC42NjcsMTAuNjY3LTEwLjY2Nw0KCQljMy4zNTcsMCw2LjUxOSwxLjU4MSw4LjUzMyw0LjI2N2wyMy40NjcsMzEuMjc1bDIzLjQ2Ny0zMS4yNzVjMy41MzUtNC43MTMsMTAuMjIxLTUuNjY4LDE0LjkzMy0yLjEzMw0KCQljMi42ODYsMi4wMTQsNC4yNjcsNS4xNzYsNC4yNjcsOC41MzN2NDIuNjY3QzM1Mi4wMjIsNTkuMjI1LDM0Ny4yNDcsNjQuMDAxLDM0MS4zNTUsNjQuMDAxeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzNzQ3NEY7IiBkPSJNNDE2LjAyMiw2NC4wMDFoLTMyYy01Ljg5MSwwLTEwLjY2Ny00Ljc3Ni0xMC42NjctMTAuNjY3VjEwLjY2Nw0KCQljMC01Ljg5MSw0Ljc3Ni0xMC42NjcsMTAuNjY3LTEwLjY2N2M1Ljg5MSwwLDEwLjY2Nyw0Ljc3NiwxMC42NjcsMTAuNjY3djMyaDIxLjMzM2M1Ljg5MSwwLDEwLjY2Nyw0Ljc3NiwxMC42NjcsMTAuNjY3DQoJCVM0MjEuOTEzLDY0LjAwMSw0MTYuMDIyLDY0LjAwMXoiLz4NCjwvZz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRjU3MjI7IiBkPSJNNDM0LjU4MiwxMTAuMTY2Yy0yLjAyLTIuMjI3LTQuODg3LTMuNDk3LTcuODkzLTMuNDk5SDg1LjM1NQ0KCWMtNS44OTEtMC4wMjYtMTAuNjg4LDQuNzI4LTEwLjcxNCwxMC42MTljLTAuMDAyLDAuMzUxLDAuMDE0LDAuNzAxLDAuMDQ3LDEuMDVsMzIsMzQxLjMzM2MwLjQxMyw0LjM3OSwzLjQ3MSw4LjA1NSw3LjcwMSw5LjI1OQ0KCWwxNDkuMzMzLDQyLjY2N2MwLjk2NCwwLjI3NCwxLjk2MywwLjQxLDIuOTY1LDAuNDA1YzEuMTQ0LTAuMDAxLDIuMjgyLTAuMTgxLDMuMzcxLTAuNTMzbDEyOC00Mi42NjcNCgljNC4wMTUtMS4zMzYsNi44Ni00LjkxOCw3LjI1My05LjEzMWwzMi0zNDEuMzMzQzQzNy41OTIsMTE1LjM1LDQzNi42MDEsMTEyLjM4NCw0MzQuNTgyLDExMC4xNjZ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkFGQUZBOyIgZD0iTTI2Ni42ODksNDI2LjY2N2MtMC45ODktMC4wMDYtMS45NzMtMC4xNS0yLjkyMy0wLjQyN0wxODkuMSw0MDQuOTA3DQoJYy0zLjY2NS0xLjA0My02LjQ5NS0zLjk2My03LjQyNC03LjY1OWwtMTAuNjY3LTQyLjY2N2MtMS41NTgtNS42ODEsMS43ODUtMTEuNTUsNy40NjYtMTMuMTA4YzUuNjgxLTEuNTU4LDExLjU1LDEuNzg1LDEzLjEwOCw3LjQ2Ng0KCWMwLjA0NCwwLjE1OSwwLjA4MywwLjMxOCwwLjExOSwwLjQ3OWw5LjE3MywzNi42OTNsNjUuNTc5LDE4LjczMWw1NC4zMTUtMTguMTEybDguNzg5LTg4LjA2NEgxNzAuNjg5DQoJYy01LjQwNCwwLjA0My05Ljk4Ni0zLjk2Mi0xMC42NjctOS4zMjNsLTEwLjY2Ny04NS4zMzNjLTAuNzQyLTUuODQ0LDMuMzkzLTExLjE4Myw5LjIzNy0xMS45MjZjMC40NzQtMC4wNiwwLjk1Mi0wLjA4OSwxLjQyOS0wLjA4NQ0KCWgyMDIuNjY3YzUuODkxLDAsMTAuNjY3LDQuNzc2LDEwLjY2NywxMC42NjdjMCw1Ljg5MS00Ljc3NiwxMC42NjctMTAuNjY3LDEwLjY2N0gxNzIuMDk3bDgsNjRoMTYxLjI1OQ0KCWM1Ljg5MS0wLjAzLDEwLjY5LDQuNzIyLDEwLjcyLDEwLjYxM2MwLjAwMiwwLjM3NC0wLjAxNiwwLjc0OC0wLjA1MywxLjEybC0xMC42NjcsMTA2LjY2N2MtMC40MTQsNC4xODMtMy4yNDUsNy43MzMtNy4yMzIsOS4wNjcNCglsLTY0LDIxLjMzM0MyNjkuMDE0LDQyNi40OTIsMjY3Ljg1NSw0MjYuNjczLDI2Ni42ODksNDI2LjY2N3oiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" }/>
                <SkillsSection type={'others'} skill={'CSS'} progress={'80%'} width={'80%'} logo={"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0YyRjJGMjsiIGQ9Ik01MTIsMjU2YzAsODIuMzE3LTM4Ljg2LDE1NS41NjQtOTkuMjM0LDIwMi4zOTdDMzY5LjQ1NSw0OTIuMDAxLDMxNS4wNjgsNTEyLDI1Niw1MTINCglzLTExMy40NTUtMTkuOTk5LTE1Ni43NjYtNTMuNjAzQzM4Ljg2LDQxMS41NjQsMCwzMzguMzE3LDAsMjU2QzAsMTE0LjYxNSwxMTQuNjE1LDAsMjU2LDBTNTEyLDExNC42MTUsNTEyLDI1NnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMDZCQzA7IiBkPSJNNDQxLjk5MiwxMTkuNDc0bC0yOS4yMjYsMzM4LjkyM0MzNjkuNDU1LDQ5Mi4wMDEsMzE1LjA2OCw1MTIsMjU2LDUxMg0KCXMtMTEzLjQ1NS0xOS45OTktMTU2Ljc2Ni01My42MDNMNzAuMDA4LDExOS40NzRINDQxLjk5MnoiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiMwMDk2REM7IiBwb2ludHM9IjI1NS45OTcsMTUxLjMzOCAyNTUuOTk3LDUwNS4yOTYgMzc4LjI2OSw0NzAuNzc3IDQwNS41NDUsMTUxLjMzOCAiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBwb2ludHM9IjM2NC4wMzYsMjg5Ljc4NyAyNzUuODUsMjg5Ljc4NyAzNjcuOTk5LDI0Mi44OSAzNzEuOTgxLDE5NS43NDYgMTQwLjAxMywxOTUuNzQ2IA0KCTE0NC4wNzIsMjQzLjgxMSAyMzcuMTg5LDI0My44MTEgMTQ3Ljg0NSwyODguNDg0IDE1Mi4wMDIsMzM3LjcyMyAxNTIuMDAyLDMzNy43MjMgMzExLjM3NiwzMzcuNzIzIDMwNi4xNTIsMzk2LjM2NiAyNTUuOTk3LDQwOS45NSANCgkyMDMuNzUyLDM5NS4zMjEgMjAyLjQ0NiwzNTguNzUgMTUzLjc3OCwzNTguNzUgMTU5Ljg2Niw0MzAuODQ4IDI1NS45OTcsNDU4LjAxNSAzNTIuMTI3LDQzMC44NDggMzY0LjAzOSwyODkuNzc5ICIvPg0KPGc+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzIyMjEyMzsiIHBvaW50cz0iMTY1LjM1Miw2Ny4yMjQgMTY1LjM1MiwzMy43ODcgMjEzLjQxNywzMy43ODcgMjEzLjQxNywxNS42NzYgMTQ3LjkzNywxNS42NzYgDQoJCTE0Ny45MzcsODUuMzM1IDIxMy40MTcsODUuMzM1IDIxMy40MTcsNjcuMjI0IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojMjIyMTIzOyIgcG9pbnRzPSIyNDEuNTQyLDQyLjkzIDI0MS41NDIsMzQuNTcgMjg5LjM0NywzNC41NyAyODkuMzQ3LDMzLjc4NyAyODkuMzQ3LDE1LjY3NiAyMjMuODY2LDE1LjY3NiANCgkJMjIzLjg2Niw1OC44NjQgMjcwLjc5OSw1OC44NjQgMjcwLjc5OSw2Ny4yMjQgMjIzLjg2Niw2Ny4yMjQgMjIzLjg2Niw4NS4zMzUgMjg5LjM0Nyw4NS4zMzUgMjg5LjM0Nyw2Ny4yMjQgMjg5LjM0Nyw0Mi45MyAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzIyMjEyMzsiIHBvaW50cz0iMzE2LjI1Miw0Mi45MyAzMTYuMjUyLDM0LjU3IDM2NC4wNTYsMzQuNTcgMzY0LjA1NiwzMy43ODcgMzY0LjA1NiwxNS42NzYgMjk4LjU3NiwxNS42NzYgDQoJCTI5OC41NzYsNTguODY0IDM0NS41MDksNTguODY0IDM0NS41MDksNjcuMjI0IDI5OC41NzYsNjcuMjI0IDI5OC41NzYsODUuMzM1IDM2NC4wNTYsODUuMzM1IDM2NC4wNTYsNjcuMjI0IDM2NC4wNTYsNDIuOTMgCSIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="}/>
                <SkillsSection type={'others'} skill={'SCSS'} progress={'60%'} width={'60%'} logo={"https://img.icons8.com/color/48/000000/sass.png"}/>
                <SkillsSection type={'others'} skill={'PHP'} progress={'10%'} width={'10%'} logo={"https://img.icons8.com/dusk/64/000000/php-logo.png"}/>
                <SkillsSection type={'others'} skill={'ReactJs'} progress={'20%'} width={'20%'} logo={"https://img.icons8.com/plasticine/100/000000/react.png"}/>
                <SkillsSection type={'others'} skill={'PrestaShop'} progress={'10%'} width={'10%'} logo={"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojQTJEQkVCOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNTI1MzUzOyIgZD0iTTQyMy40MjQsNDQ5LjY3M2MtMTQuMTgyLDEyLjI1NS0yOS43MTQsMjIuOTg5LTQ2LjM3LDMxLjkzMmMtNC44NjQsMi42MjgtOS44Myw1LjEwMi0xNC44OTksNy40MDYNCglDMzI5LjgxNCw1MDMuNzczLDI5My44NzEsNTEyLDI1Niw1MTJzLTczLjgxNC04LjIyNi0xMDYuMTU0LTIyLjk4OWMtNS4wNTItMi4zMDQtMTAuMDE3LTQuNzYyLTE0Ljg5OS03LjM4OQ0KCWMtMTYuNjQtOC45NDItMzIuMTg4LTE5LjY5NC00Ni4zNy0zMS45NDljNDEuNzk2LTQ0Ljc2NiwxMDEuMzQxLTcyLjc1NSwxNjcuNDI0LTcyLjc1NQ0KCUMzMjIuMDgyLDM3Ni45MTgsMzgxLjYyOCw0MDQuOTA2LDQyMy40MjQsNDQ5LjY3M3oiLz4NCjxwYXRoIGQ9Ik0zODQuNDk1LDQ3Ny40NTdjLTUuMzc2LDMuMTQxLTEwLjg3MSw2LjA1OS0xNi40Nyw4Ljc5QzMzNC4xODIsNTAyLjc1LDI5Ni4xNzUsNTEyLDI1Niw1MTINCgljLTQwLjE5MiwwLTc4LjIxNi05LjI2Ny0xMTIuMDQyLTI1Ljc3Yy01LjU5OC0yLjczLTExLjA3Ni01LjY2NS0xNi40MzUtOC43OWMzNC45Ny0zMi40MjYsNzkuNzE4LTUxLjg4MiwxMjguNDc4LTUxLjg4Mg0KCUMzMDQuNzc3LDQyNS41NTgsMzQ5LjUyNiw0NDUuMDE0LDM4NC40OTUsNDc3LjQ1N3oiLz4NCjxnPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNCRkIwOTg7IiBwb2ludHM9IjE5OS42ODEsMzg0LjI5IDE3MC42NjcsMzg0LjI5IDE0Ny42MjYsNDU2LjQ2NSAxNzYuNjM5LDQ1Ni40NjUgCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNCRkIwOTg7IiBwb2ludHM9IjMxMi4zMiwzODQuMjkgMzQxLjMzMywzODQuMjkgMzY0LjM3NSw0NTYuNDY1IDMzNS4zNjEsNDU2LjQ2NSAJIi8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojNTI1MzUzOyIgZD0iTTQzNi40NjMsMjU3LjcwNmMwLDAuNjY1LDAsMS4zMzEtMC4wMTcsMS45OTdjLTAuMjksMjcuOTczLTYuOTQ1LDU0LjQwOC0xOC41ODYsNzcuOTQzDQoJYy0xMS43NTksMjMuODI1LTI4LjYwNCw0NC42NjMtNDkuMTM1LDYxLjEzNGMtMzAuOTU4LDI0Ljg0OS03MC4yNjMsMzkuNjk3LTExMy4wMTUsMzkuNjk3Yy03Ni45NTQsMC0xNDIuNjYtNDguMDc3LTE2OC43MzgtMTE1LjgzMg0KCWMtNy43ODItMjAuMTU2LTEyLjAzMi00Mi4wNTItMTIuMDMyLTY0LjkzOGMwLTk5LjgyMyw4MC45My0xODAuNzU0LDE4MC43Ny0xODAuNzU0YzY3LjQ5OCwwLDEyNi4zNzgsMzcuMDE4LDE1Ny40MDYsOTEuODcNCgljNS45OSwxMC41ODIsMTAuOTU3LDIxLjgyOCwxNC43MjgsMzMuNjA0QzQzMy40NDIsMjE5Ljg1Myw0MzYuNDYzLDIzOC40MjEsNDM2LjQ2MywyNTcuNzA2eiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0zNzIuMDU0LDM5My45NjZsLTMuMzI4LDQuODE0Yy0zMC45NTgsMjQuODQ5LTcwLjI2MywzOS42OTctMTEzLjAxNSwzOS42OTcNCgkJYy03Ni45NTQsMC0xNDIuNjYtNDguMDc3LTE2OC43MzgtMTE1LjgzMmMxLjUwMy0yMi42Myw3LjgzNC00My45NDYsMTcuOTcxLTYyLjk0MWMyNi4zMzUtNDkuMzQsNzguMzE5LTgyLjkxLDEzOC4xMzgtODIuOTENCgkJYzI1LjQ2MywwLDUwLjAwNSw5LjM1Myw3Mi45NDMsMjMuOTQ1bDkuMzcsMjAuMjc1bDkuNjc3LDI1LjAzN0wzNzIuMDU0LDM5My45NjZ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik00MzYuNDYzLDI1Ny43MDZjMCwwLjY2NSwwLDEuMzMxLTAuMDE3LDEuOTk3Yy0wLjI5LDI3Ljk3My02Ljk0NSw1NC40MDgtMTguNTg2LDc3Ljk0Mw0KCQlsLTI3LjMyNC0xOC4yMWwtMzUuNzIxLTU5LjczNGwtMTUuMDUzLTI1LjE3NGMzLjg0LTMwLjI5NCwyNy43MzQtNTguNDU0LDUxLjYyNi01OC40NTRjMS4yOCwwLDIuNTYsMC4xMTksMy44NCwwLjM1OA0KCQljNi4wOTMsMS4xMSwxMi4yMiw0Ljc2MiwxOC4wNzQsOS44NjVjNS4xNTMsNC40ODgsMTAuMDcsMTAuMTAzLDE0LjU0MSwxNi4xMjhDNDMzLjQ0MiwyMTkuODUzLDQzNi40NjMsMjM4LjQyMSw0MzYuNDYzLDI1Ny43MDZ6Ig0KCQkvPg0KPC9nPg0KPHBhdGggZD0iTTM0MS40NywyMjUuOTk3YzAsMCwzLjg0LTY3Ljg0LDQwLjUzNC03Mi41MzRzNDkuMDY2LDgwLjIxNCw0OS4wNjYsODAuMjE0TDM0MS40NywyMjUuOTk3eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0JDQkVCRjsiIGQ9Ik00MTMuMzA0LDE4Ni4zdjczLjQwM2gtNTguNDg4bC0xNS4wNTMtMjUuMTc0YzMuODQtMzAuMjk0LDI3LjczNC01OC40NTQsNTEuNjI2LTU4LjQ1NA0KCUMzOTguNzEyLDE3Ni4wNzcsNDA2LjIyMSwxODAuMTIyLDQxMy4zMDQsMTg2LjN6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRjlCMTM4OyIgZD0iTTMzOS4wODEsNDE4LjEzNGM1Ni41NDItNy44NjgsMTEyLjYwNi02Ny40MTQsMTEyLjYwNi02Ny40MTQNCgljLTIxLjMzNC0zMC4wMi02Mi4wMDMtOTIuMTk0LTExMi44NzktMTMzLjQ5NWgtMC4wMTdjLTQuNTc0LTMuNzIxLTkuMjMzLTcuMjctMTMuOTYxLTEwLjU5OGMtMi45MDItMi4wNDgtNS44NTQtNC4wMS04LjgwNi01Ljg4OA0KCWMtMC4zNTgsMTYuMjMtMS4yOCwzOS45MDItMy40OTgsNTguOTY2Yy0wLjA2OCwwLjU4LTAuMTM3LDEuMTQzLTAuMjA1LDEuNzA2Yy0yLjk1MywyMy45NDUtMjMuNTg2LDY1Ljg5NC0zNC4xNjcsODkuODU2djAuMDE3DQoJYy0zLjc1NCw4LjQ4My02LjIzLDE0LjcxMS02LjIzLDE3LjA4NGMwLDkuMDk3LTUuMTIsNTAuNjIsNTUuMTc3LDUwLjYyYzAuNzY4LDAsMS41MTktMC4wMTcsMi4yODctMC4wMzQNCglDMzMyLjYxMiw0MTguODY3LDMzNS44NTUsNDE4LjU5NCwzMzkuMDgxLDQxOC4xMzQiLz4NCjxwYXRoIGQ9Ik0zMTYuMDI0LDIwMC43MzhjLTMxLjcyNy02Mi42MzUtODkuNzA3LTU5LjA5My0xMTQuOTI3LTQ5LjgzNWMtMzMuNzA2LDEyLjM3NC02MC4xNiw0NC4zNzQtNTguMDI2LDczLjM4NiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0JDQkVCRjsiIGQ9Ik0yNjcuOTQ2LDE3OS43MTJjMTYuNjIzLDMuODIzLDMyLjcsMTEuMjQ3LDQ4LjA3NywyMS4wMjZjLTAuMTcsOC4xMDYtMC40OTUsMTguMDktMS4wNTgsMjguNDE2DQoJYy0wLjU0NywxMC4zNDItMS4zMzEsMjEuMDI2LTIuNDQxLDMwLjU1aC00Mi4zNTlIMTA0Ljk0M2MyNi4zMzQtNDkuMzQsNzguMzE5LTgyLjkxLDEzOC4xMzgtODIuOTENCglDMjUxLjQ3OCwxNzYuNzk0LDI1OS43ODksMTc3LjgxOCwyNjcuOTQ2LDE3OS43MTIiLz4NCjxwYXRoIGQ9Ik0yODguOTksMzYyLjEwM2MtMjUuMDMyLTUuMTItNzMuOTU2LTM1LjI3Mi03My45NTYtMzUuMjcyczM0LjEzNCw0Ni4wOCw4MC4yMTQsNTkuMTY0TDI4OC45OSwzNjIuMTAzeiIvPg0KPHBhdGggZD0iTTM4Ny40MTQsMzMxLjk0NmwtNDguMzMzLDg2LjE4NmwtOS42OTUsMC44MTljLTAuNzY4LDAuMDE3LTEuNTE4LDAuMDM0LTIuMjg2LDAuMDM0Yy02MC4yOTcsMC01NS4xNzctNDEuNTIzLTU1LjE3Ny01MC42Mg0KCWMwLTIuMzczLDIuNDc0LTguNjAyLDYuMjI5LTE3LjA4M3YtMC4wMThjOS43MTEtMjEuNDE4LDY4Ljc0NS02NC40OTUsNzEuMDgzLTEwOS42MDENCglDMzUxLjU3NCwxOTYuNTU3LDM4Ny40MTQsMzMxLjk0NiwzODcuNDE0LDMzMS45NDZ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRTEwMDZEOyIgZD0iTTQ1MS42ODYsMzUwLjcybC0wLjAxNywwLjAxN2wtMC4wMTcsMC4wMzRjLTEuNzI0LDEuNzkyLTU2LjkxOCw1OS42MTUtMTEyLjU3Miw2Ny4zNjMNCgljLTE5Ljk1MS0xNS4zMjYtMjYuNTktMjkuOTE5LTIzLjA3NC00OC4xMTFjMi4zMDQtMTEuODc4LDguOTQzLTI1LjMxLDE5LjA2My00MS40ODljMjUuNi00MC45NiwyMS4wNDMtODEuOTIsMy43MjEtMTExLjMwOWgwLjAxNw0KCUMzODkuNjgzLDI1OC41MjYsNDMwLjM1NCwzMjAuNyw0NTEuNjg2LDM1MC43MnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM5RDFENTQ7IiBkPSJNNDUxLjY3LDM1MC43MzdsLTAuMDE3LDAuMDM0Yy0xLjcyNCwxLjc5Mi01Ni45MTgsNTkuNjE1LTExMi41NzIsNjcuMzYzDQoJYy0xOS45NTEtMTUuMzI2LTI2LjU5LTI5LjkxOS0yMy4wNzQtNDguMTExaDAuMDE3QzQwNC40OCwzODIuODc0LDQ1MC40NzUsMzUxLjU1Niw0NTEuNjcsMzUwLjczN3oiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNFMkRFREM7IiBkPSJNMzE2LjAyNCwyMDAuNzM4Yy0wLjE3MSw4LjEwNi0wLjQ5NSwxOC4wOS0xLjA1OSwyOC40MTZjLTAuNTQ2LDEwLjM0Mi0xLjMzMSwyMS4wMjUtMi40NDEsMzAuNTUNCgkJaC00Mi4zNTlsLTIuMjE4LTI0LjQ1N3YtNTUuNTM1QzI4NC41NywxODMuNTM1LDMwMC42NDYsMTkwLjk1OCwzMTYuMDI0LDIwMC43Mzh6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0UyREVEQzsiIGQ9Ik00MzYuNDYzLDI1Ny43MDZjMCwwLjY2NSwwLDEuMzMxLTAuMDE3LDEuOTk3SDM5NS4yM3YtODMuMjY4YzYuMDkzLDEuMTEsMTIuMjIsNC43NjIsMTguMDc0LDkuODY1DQoJCWM1LjE1Myw0LjQ4OCwxMC4wNywxMC4xMDMsMTQuNTQxLDE2LjEyOEM0MzMuNDQyLDIxOS44NTMsNDM2LjQ2MywyMzguNDIxLDQzNi40NjMsMjU3LjcwNnoiLz4NCjwvZz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiM5MTk0OTQ7IiBwb2ludHM9IjI4Ny44NTMsMjU0LjU4MyAyNjcuMzczLDE5MC4yOTkgMjUxLjUxMywyNDEuNTc5IDE4NS40NTMsMjU5LjcwMyAyNzMuNjMsMjc4LjQ3NyAiLz4NCjxjaXJjbGUgY3g9IjI2Ny45NCIgY3k9IjI1OS43IiByPSIyNC40NjIiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiM5MTk0OTQ7IiBwb2ludHM9IjQxMy4zMDQsMjEyLjc3IDQwMy43NjYsMjU0LjcyNiA0MjIuODkxLDI1NS4wMiAiLz4NCjxlbGxpcHNlIGN4PSI0MTMuMzEiIGN5PSIyNTkuNyIgcng9IjkuOTM2IiByeT0iMTcuODU3Ii8+DQo8ZWxsaXBzZSBzdHlsZT0iZmlsbDojRkZGRkZGOyIgY3g9IjQxMy4zMSIgY3k9IjI1MC40NyIgcng9IjMuODQ2IiByeT0iNi45MTIiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0UyREVEQzsiIGN4PSIyNjcuOTQiIGN5PSIyNDcuNzYiIHI9IjguNjY4Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojQkZCMDk4OyIgZD0iTTM2OC4wMjYsNDU2LjQ2NXYyOS43ODJDMzM0LjE4Miw1MDIuNzUsMjk2LjE3NSw1MTIsMjU2LDUxMmMtNDAuMTkyLDAtNzguMjE2LTkuMjY3LTExMi4wNDItMjUuNzcNCgl2LTI5Ljc2NGgyMjQuMDY4VjQ1Ni40NjV6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojQUE5Njc2OyIgZD0iTTM2OC4wMjYsNDU2LjQ2NXYyOS43ODJDMzM0LjE4Miw1MDIuNzUsMjk2LjE3NSw1MTIsMjU2LDUxMnYtNTUuNTM1SDM2OC4wMjZ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojOEE3NDYwOyIgZD0iTTM3Ny4wNTUsNDgxLjYwNGMtNC44NjQsMi42MjgtOS44Myw1LjEwMi0xNC44OTksNy40MDZsLTIuMTY3LTI3LjkyMUgxNTIuMDEzbC0yLjE2NywyNy45MjENCgljLTUuMDUyLTIuMzA0LTEwLjAxNy00Ljc2Mi0xNC44OTktNy4zOWwyLjg2Ny0zMi40NzhoMjM2LjM3NEwzNzcuMDU1LDQ4MS42MDR6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="}/>
                <SkillsSection type={'others'} skill={'Java'} progress={'80%'} width={'80%'} logo={"https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"}/>
                <SkillsSection type={'others'} skill={'C'} progress={'70%'} width={'70%'} logo={"https://img.icons8.com/color/48/000000/c-programming.png"}/>
                <SkillsSection type={'others'} skill={'C++'} progress={'60%'} width={'60%'} logo={"https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"}/>
                <SkillsSection type={'others'} skill={'Docker'} progress={'50%'} width={'50%'} logo={"https://img.icons8.com/color/48/000000/docker.png"}/>
                <SkillsSection type={'others'} skill={'Git'} progress={'50%'} width={'50%'} logo={"https://img.icons8.com/color/50/000000/git.png"}/>
                <SkillsSection type={'others'} skill={'Anglais'} progress={'90%'} width={'90%'} logo={"https://img.icons8.com/doodle/48/000000/great-britain.png"}/>
            </div>
            <div className="space"></div>
            <Tittle title={'Services'} span={'Services'} />
            <div className="services-container">
                <div className="elem-service">
                    <ServicesSection image={design} title="Design" text="Design créer par Yannick Simoens, étudiant freelance à eartsup en 2ème année qui s'occupera de toute la partie Design des projets" />
                </div>
                <div className="elem-service">
                    <ServicesSection 
                    image={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMS45OTcgNTExLjk5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNTA2Ljc2LDI0Mi44MjhsLTExOC40LTEyNS40NGMtNy4yNzctNy43MTgtMTkuNDI0LTguMDctMjcuMTQyLTAuNzg3Yy03LjcwNiw3LjI3Ny04LjA2NCwxOS40My0wLjc4MSwyNy4xNDIgICAgbDEwNS45NjUsMTEyLjI1NkwzNjAuNDM3LDM2OC4yNjhjLTcuMjgzLDcuNzEyLTYuOTI1LDE5Ljg1OSwwLjc4MSwyNy4xNDJjMy43MTIsMy41MDEsOC40NTQsNS4yMzUsMTMuMTc4LDUuMjM1ICAgIGM1LjEwMSwwLDEwLjE5NS0yLjAyMiwxMy45NjUtNi4wMWwxMTguNC0xMjUuNDQ2QzUxMy43NDIsMjYxLjc4NSw1MTMuNzQyLDI1MC4yMjYsNTA2Ljc2LDI0Mi44Mjh6IiBmaWxsPSIjMDM3ZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0xNTEuNTY2LDM2OC4yNjJMNDUuNjA4LDI1NS45OTlsMTA1Ljk1OC0xMTIuMjYyYzcuMjc3LTcuNzEyLDYuOTI1LTE5Ljg2Ni0wLjc4Ny0yNy4xNDIgICAgYy03LjcwNi03LjI3Ny0xOS44NjYtNi45MjUtMjcuMTQyLDAuNzg3bC0xMTguNCwxMjUuNDRjLTYuOTgyLDcuMzk4LTYuOTgyLDE4Ljk2MywwLDI2LjM2MkwxMjMuNjQzLDM5NC42MyAgICBjMy43NzYsNCw4Ljg2NCw2LjAxNiwxMy45NjUsNi4wMTZjNC43MjMsMCw5LjQ2Ni0xLjc0MSwxMy4xNzEtNS4yNDJDMTU4LjQ5OCwzODguMTI3LDE1OC44NDMsMzc1Ljk3NCwxNTEuNTY2LDM2OC4yNjJ6IiBmaWxsPSIjMDM3ZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yODcuMDYxLDUyLjY5N2MtMTAuNDc3LTEuNTg3LTIwLjI4Miw1LjYwNi0yMS44ODIsMTYuMDgzbC01Ni4zMiwzNjguNjRjLTEuNiwxMC40ODMsNS42LDIwLjI4MiwxNi4wODMsMjEuODgyICAgIGMwLjk4NiwwLjE0NywxLjk1OCwwLjIxOCwyLjkyNSwwLjIxOGM5LjMyNSwwLDE3LjUwNC02LjgwMywxOC45NTctMTYuMzAxbDU2LjMyLTM2OC42NCAgICBDMzA0Ljc0NCw2NC4wOTUsMjk3LjU0NCw1NC4yOTcsMjg3LjA2MSw1Mi42OTd6IiBmaWxsPSIjMDM3ZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="}
                    title="Code"
                    text="Je développe des sites web, application mobile et logiciel"/>
                </div>
                <div className="elem-service">
                    <ServicesSection image={logo} title="Freelance" text="Etudiante en 3e année à Epitech,
                    je fais aussi de la freelance sur mon temps libre " />
                </div>
            </div>
        </div>
    )
}

export default AboutPage;