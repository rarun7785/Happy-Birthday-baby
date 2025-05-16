import streamlit as st
import streamlit.components.v1 as components

with open("index.html", 'r', encoding='utf-8') as file:
    html_content = file.read()

st.set_page_config(page_title="Happy Birthday 💗", layout="wide")
components.html(html_content, height=800, scrolling=True)
