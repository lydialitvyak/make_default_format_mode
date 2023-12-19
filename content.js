function activateFormattingMode() {
  const formatButtonSelector =
    'button[data-tid="newMessageCommands-expand-compose"]';
  const messageEditorSelector = 'div[data-tid="ckeditor"]';

  function clickFormatButton() {
    try {
      const formatButton = document.querySelector(formatButtonSelector);
      if (formatButton) {
        console.log("書式モード展開ボタンが見つかりました。クリックします。");
        formatButton.click();
      } else {
        console.error("書式モード展開ボタンが見つかりませんでした。");
      }
    } catch (error) {
      console.error(
        "書式モードの再アクティベート中にエラーが発生しました:",
        error
      );
    }
  }

  // ページロード時に書式モードをアクティベート
  window.addEventListener("load", () => setTimeout(clickFormatButton, 3000));

  // エディターのサイズを監視して書式モードを維持
  setInterval(() => {
    const messageEditor = document.querySelector(messageEditorSelector);
    if (messageEditor) {
      const editorHeight = messageEditor.clientHeight;
      console.log(`エディターの高さ: ${editorHeight}px`);
      if (editorHeight < 104) {
        console.log(
          "エディターの高さが104px未満です。書式モードをアクティベートします。"
        );
        clickFormatButton();
      }
    }
  }, 100); // 0.1秒ごとにチェック
}

activateFormattingMode();
