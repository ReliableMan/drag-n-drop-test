import { ref } from 'vue';

export default {
  setup () {
    const items = ref([
      {
        id: 0,
        title: 'покормить кота',
        categoryId: 0
      },
      {
        id: 1,
        title: 'сходить за хлебом',
        categoryId: 1
      },
      {
        id: 2,
        title: 'помыть посуду',
        categoryId: 0
      },
      {
        id: 3,
        title: 'вынести мусор',
        categoryId: 2
      },
      {
        id: 4,
        title: 'помыть полы',
        categoryId: 1
      },
    ])
    const categories = ref([
      {
        id: 0,
        title: 'сегодня'
      },
      {
        id: 1,
        title: 'завтра'
      },
      {
        id: 2,
        title: 'послезавтра'
      }
    ])

    function onDragStart(e, item) {
      e.dataTransfer.dropEffect = 'move';
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('itemId', item.id.toString())
    }
    function onDrop(e, categoryId) {
      const itemId = parseInt(e.dataTransfer.getData('itemId'));
      items.value = items.value.map(x => {
        if(x.id == itemId) 
        x.categoryId = categoryId;
        return x
      })
    }
    return {
      items,
      categories,
      onDragStart,
      onDrop
    }
  }
}
