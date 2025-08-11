document.addEventListener('DOMContentLoaded', function() {
  // Collapse all details elements by default
  const allDetails = document.querySelectorAll('.collapsible-list-deep details');
  allDetails.forEach(detail => {
    detail.open = false;
  });
  
  // Add expand/collapse all buttons to each column
  const columns = document.querySelectorAll('.comparison-column');
  columns.forEach(column => {
    const controls = document.createElement('div');
    controls.className = 'collapse-controls';
    controls.innerHTML = `
      <button class="btn-expand-all">Expand All</button>
      <button class="btn-collapse-all">Collapse All</button>
    `;
    column.insertBefore(controls, column.firstChild);
    
    controls.querySelector('.btn-expand-all').addEventListener('click', () => {
      column.querySelectorAll('details').forEach(d => d.open = true);
    });
    
    controls.querySelector('.btn-collapse-all').addEventListener('click', () => {
      column.querySelectorAll('details').forEach(d => d.open = false);
    });
  });
});