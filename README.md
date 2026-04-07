# Test Loop Landing (Public Repo)

Отдельный статический лендинг для GitHub Pages.  
Мобильный Flutter-проект можно оставить приватным.

## Структура

- `index.html` — основной лендинг
- `assets/styles.css` — стили
- `assets/app.js` — интерактив (mobile menu + reveal animation)
- `assets/favicon.svg` — favicon
- `assets/og-image.svg` — social preview image

## Публикация на GitHub Pages

1. Создай новый **public** репозиторий (например `test-loop-landing`).
2. Залей в него содержимое этой папки.
3. GitHub -> Settings -> Pages:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
4. Дождись деплоя, получишь URL вида:
   - `https://<username>.github.io/test-loop-landing/`

## Важно перед релизом

В `index.html` обнови `og:image`:

```html
<meta property="og:image" content="https://<username>.github.io/<repo>/assets/og-image.svg" />
```
