<template>

  <div style="display:flex">
    <div
      v-for="category in categories" 
      :key="category.id"
      @drop="onDrop($event, category.id)" 
      class="droppable"
      @dragover.prevent
      @dragenter.prevent>
        <h4>{{category.title}}</h4>
      <div
        v-for="item in items.filter(x => x.categoryId === category.id)"
        @dragstart="onDragStart($event, item)" 
        class="draggable"
        draggable="true">
         <h5>{{item.title}}</h5>
      </div>
    </div>
  </div>

</template>

<script>
import DragAndDropMixin from "@/mixins/DragAndDropMixin";
export default {
  name: 'App',
  mixins: [DragAndDropMixin]
}
</script>

<style scoped lang="css">
  .droppable {
    width: 150px;
    padding: 15px;
    border-radius: 10px;
    background-color: #7986CB;
    margin-bottom: 10px;
    margin-right: 10px
  }
  .droppable h4 {
    color: white;
    font-size: 20px
  }
  .draggable {
    background: #E8EAF6;
    padding: 5px;
    border-radius: 10px;
    margin-bottom: 5px
  }
  .draggable h5 {
    margin: 0;
    font-size: 15px
  }

</style>
