import { addPostTasks } from '../controller/addPost_controller';
import { Modal } from './Modal.js';

const closeModalAddPost = ($AddPost, $closeAddPostElement, e) => {
  if ((e.target === $AddPost) || (e.target === $closeAddPostElement)) {
    $AddPost.style.display = 'none';
  }
};

export const AddPost = (onNavigate) => {
  const $AddPost = document.createElement('div');
  $AddPost.id = 'addPost';
  $AddPost.className = 'container-modal';
  const $idCloseAddPost = 'closeAddPost';
  const $formID = 'registerForm';

  $AddPost.innerHTML = `
  <div class="container-modal__content">
     <span class="container-modal__close" id="${$idCloseAddPost}">&times;</span>
     <div class='container-AddPost__title'>
        <p> Crear publicación </p>
     </div>

     <form class='container-AddPost__form' id="${$formID}"> 
        <div class="containerInput">
          <input type="textarea" class="containerInput__box id="textAddPost" name="user_post" placeholder="What are you thinking?" required>
        </div>  
        <div class="containerInput"> 
          <div class="containerInput__uploadFileIcon">
            <img src="https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/icon_addImage.png
            " alt="upload file icon" width="38px" height="36px">
          </div> 
          <input type="file" class="containerInput__box" id="fileAddPost" placeholder="Upload a file" required>
        </div> 
        <input class="AddPost btnsubmit" type="submit" value="Publicar">
     </form>
  </div>
  `;
  // console.log(currentUser());

  const $closeAddPostElement = document.getElementById($idCloseAddPost);
  document.body.appendChild($AddPost);
  $AddPost.style.display = 'block';

  $AddPost.addEventListener('click', (e) => {
    closeModalAddPost($AddPost, $closeAddPostElement, e);
  });

  const $form = document.getElementById($formID);

  $form.addEventListener('submit', (e) => {
    e.preventDefault();

    const texPost = $form[0].value;
    const objFile = $form[1].files[0];

    console.log($form);
    console.log('textPost en addPost: ', texPost);
    console.log('urlFile en addPost: ', objFile);

    addPostTasks(texPost, objFile)
      .then((postDoc) => {
        Modal('Success:', 'Your post was successfully created');
      })
      .catch((error) => {
        Modal('Error:', 'Something went wrong');
      });
  });

  return $AddPost;
};
