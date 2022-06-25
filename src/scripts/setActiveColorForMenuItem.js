function setSelectedLinkColorByDefault(links) {
  const selectedItemByDefault = links[0];
  
  selectedItemByDefault.classList.add('link_active');
}

function setActiveColorOfFirstLinkByDefault() {
  const menuItemLinks = document.querySelectorAll('.categories__link');
  setSelectedLinkColorByDefault(menuItemLinks);

  menuItemLinks.forEach(item => {
    item.addEventListener('click', () => {
        menuItemLinks.forEach(link => link.classList.remove('link_active'));
        item.classList.add('link_active');
      });
    });
}

setActiveColorOfFirstLinkByDefault();