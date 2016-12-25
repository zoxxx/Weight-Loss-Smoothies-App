/**
 * Created by zox http://www.steadyhealth.com
 * Date: 8/6/16
 * Time: 2:46 PM
 */

recipesApp.factory('recipes', function () {
    var recipes = [
            {
                //locked: 'premium',
                name: 'Aloha Smoothie',
                icon: 'img/dandelion.png',
                ingredients: [
                    {icon: 'img/dandelion.png', text: '2½ cups of dandelion leaves'},
                    {icon: 'img/pineapple.png', text: '1½ cup of sweet Hawaiian pineapple'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 4 Cups'
            },
            {
                //locked: 'premium',
                name: 'Cicada Jump',
                icon: 'img/wheatgrass.png',
                ingredients: [
                    {icon: 'img/wheatgrass.png', text: '1 cup of wheat grass'},
                    {icon: 'img/banana.png', text: '2 bananas'},
                    {icon: 'img/lemon.png', text: '1 cup of lemon juice'},
                    {icon: 'img/ginger.png', text: '½ inch ginger'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 4 Cups'
            },
            {
                //locked: 'premium',
                name: 'Stinging Banana',
                icon: 'img/nettle.png',
                ingredients: [
                    {icon: 'img/nettle.png', text: '2 cups of nettle'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/mango.png', text: '1 mango'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Ironberry',
                icon: 'img/swisschard.png',
                ingredients: [
                    {icon: 'img/swisschard.png', text: '2 cups of chard (or spinach)'},
                    {icon: 'img/strawberry.png', text: '10 strawberries with stems'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/mango.png', text: '1 mango, peeled'},
                    {icon: 'img/lemon.png', text: '1 cup of lemon juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 4 cups'
            },
            {
                name: 'Green River',
                icon: 'img/fennel.png',
                ingredients: [
                    {icon: 'img/fennel.png', text: '1 cup of fennel greens'},
                    {icon: 'img/swisschard.png', text: '1 cup chard (or spinach)'},
                    {icon: 'img/dandelion.png', text: '1 cup of dandelion leaves'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/mango.png', text: '1 mango, peeled'},
                    {icon: 'img/pear.png', text: '1 pear'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 4 cups'
            },
            {
                name: 'Lettuccino',
                icon: 'img/lettuce.png',
                ingredients: [
                    {icon: 'img/lettuce.png', text: '8 lettuce leaves'},
                    {icon: 'img/watermelon.png', text: '5 cups of watermelon'},
                    {icon: 'img/pineapple.png', text: '2 cups of pineapple'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 4 cups'
            },
            {
                name: 'Crocodile Tears',
                icon: 'img/kale.png',
                ingredients: [
                    {icon: 'img/kale.png', text: '5 leaves green kale'},
                    {icon: 'img/swisschard.png', text: '2 leaves chard (or spinach)'},
                    {icon: 'img/lettuce.png', text: '3 lettuce leaves'},
                    {icon: 'img/chillipeppers.png', text: '½ inch hot pepper (jalapeno, chilli)'},
                    {icon: 'img/garlic.png', text: '1 clove garlic'},
                    {icon: 'img/onion.png', text: '½ red onion'},
                    {icon: 'img/mint.png', text: '1 sprig mint'},
                    {icon: 'img/lemon.png', text: '1 cup of lemon juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Stinging Soup',
                icon: 'img/nettle.png',
                ingredients: [
                    {icon: 'img/nettle.png', text: '1 cup of nettle'},
                    {icon: 'img/celery.png', text: '2 stalks celery'},
                    {icon: 'img/parsley.png', text: '1 cup of parsley (fresh)'},
                    {icon: 'img/pepper.png', text: '1 bell pepper'},
                    {icon: 'img/garlic.png', text: '1 clove garlic'},
                    {icon: 'img/tomato.png', text: '1 tomato'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/lemon.png', text: '1 cup of lemon juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 4 cups'
            },
            {
                name: 'Green Mamba',
                icon: 'img/swisschard.png',
                ingredients: [
                    {icon: 'img/swisschard.png', text: '4 chard leaves'},
                    {icon: 'img/watermelon.png', text: '4 cups of watermelon'},
                    {icon: 'img/chillipeppers.png', text: '½ inch hot pepper (jalapeno, chilli)'},
                    {icon: 'img/ginger.png', text: '½ inch ginger'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Leprechaun Chest',
                icon: 'img/cabbage.png',
                ingredients: [
                    {icon: 'img/cabbage.png', text: '4 cabbage leaves'},
                    {icon: 'img/lettuce.png', text: '4 lettuce leaves'},
                    {icon: 'img/apple.png', text: '2 cups of apples'},
                    {icon: 'img/ginger.png', text: '½ inch ginger'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Dragon Blood',
                icon: 'img/swisschard.png',
                ingredients: [
                    {icon: 'img/swisschard.png', text: '8 chard (or spinach) leaves'},
                    {icon: 'img/beetroot.png', text: '1 beetroot'},
                    {icon: 'img/apple.png', text: '1 small apple'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Monkey Business',
                icon: 'img/mint.png',
                ingredients: [
                    {icon: 'img/dandelion.png', text: '3 cups dandelion greens'},
                    {icon: 'img/mint.png', text: '1 sprig of mint'},
                    {icon: 'img/banana.png', text: '2 bananas'},
                    {icon: 'img/strawberry.png', text: '2 cups of strawberries'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 4 cups'
            },
            {
                name: 'Going Bananas',
                icon: 'img/dandelion.png',
                ingredients: [
                    {icon: 'img/dandelion.png', text: '3 cups dandelion greens'},
                    {icon: 'img/banana.png', text: '3 bananas'},
                    {icon: 'img/lime.png', text: '1 whole lime (with peel)'},
                    {icon: 'img/water.png', text: '3 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 4 cups'
            },
            {
                name: 'Comfort in Green',
                icon: 'img/romainlettuce.png',
                ingredients: [
                    {icon: 'img/romainlettuce.png', text: '8 leaves romaine lettuce'},
                    {icon: 'img/grapes.png', text: '1 cup of red grapes'},
                    {icon: 'img/orange.png', text: '1 orange'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Sour Grapes',
                icon: 'img/lettuce.png',
                ingredients: [
                    {icon: 'img/lettuce.png', text: '6 leaves lettuce'},
                    {icon: 'img/nettle.png', text: '1 leave nettle'},
                    {icon: 'img/grapes.png', text: '2 cups of red grapes'},
                    {icon: 'img/orange.png', text: '2 apricots'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/berries.png', text: '½ cup of blueberries'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 4 cups'
            },
            {
                name: 'Breeze',
                icon: 'img/romainlettuce.png',
                ingredients: [
                    {icon: 'img/romainlettuce.png', text: '6 leaves romain lettuce'},
                    {icon: 'img/melon.png', text: '½ melon (cantaloupe or honeydew)'},
                    {icon: 'img/mint.png', text: '1 sprig mint'},
                    {icon: 'img/cinnamon.png', text: '¼ cup cinnamon'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Summer Night',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '6 spinach leaves'},
                    {icon: 'img/peach.png', text: '6 peaches'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Mangnificent Seven',
                icon: 'img/nettle.png',
                ingredients: [
                    {icon: 'img/nettle.png', text: '7 nettle leaves'},
                    {icon: 'img/mango.png', text: '4 peeled mangoes'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Strawberry Dream',
                icon: 'img/romainlettuce.png',
                ingredients: [
                    {icon: 'img/romainlettuce.png', text: '½ bunch of romain lettuce'},
                    {icon: 'img/strawberry.png', text: '2 cups of strawberries'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Kiwi Sonata',
                icon: 'img/celery.png',
                ingredients: [
                    {icon: 'img/celery.png', text: '3 stalks of celery'},
                    {icon: 'img/kiwi.png', text: '4 very ripe kiwis'},
                    {icon: 'img/banana.png', text: '1 ripe banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Green Garden',
                icon: 'img/broccoli.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '½ bunch of spinach (or chard)'},
                    {icon: 'img/broccoli.png', text: '1 broccoli'},
                    {icon: 'img/apple.png', text: '2 apples, peeled'},
                    {icon: 'img/lime.png', text: '½ lime (with peel)'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Elemintary',
                icon: 'img/mint.png',
                ingredients: [
                    {icon: 'img/mint.png', text: '½ bunch of mint'},
                    {icon: 'img/kale.png', text: '5 leaves of kale'},
                    {icon: 'img/pear.png', text: '4 pears'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Fistful of Green',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '2 handfuls of spinach'},
                    {icon: 'img/broccoli.png', text: '1 broccoli'},
                    {icon: 'img/banana.png', text: '2 bananas'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Ra-Ra-Raspberry',
                icon: 'img/kale.png',
                ingredients: [
                    {icon: 'img/berries.png', text: '1 handful of raspberries'},
                    {icon: 'img/kale.png', text: '5 leaves of kale'},
                    {icon: 'img/pear.png', text: '2 pears'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Gingerbeard',
                icon: 'img/lettuce.png',
                ingredients: [
                    {icon: 'img/lettuce.png', text: '3 leaves of lettuce'},
                    {icon: 'img/spinach.png', text: '2 cups of spinach'},
                    {icon: 'img/pear.png', text: '1 pear'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/ginger.png', text: '1 inch ginger'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 3 cups'
            },
            {
                name: 'Some Like It Hot',
                icon: 'img/coriander.png',
                ingredients: [
                    {icon: 'img/coriander.png', text: '2 cups of coriander (cilantro)'},
                    {icon: 'img/romainlettuce.png', text: '6 leaves of romaine lettuce'},
                    {icon: 'img/celery.png', text: '2 stalks of celery'},
                    {icon: 'img/tomato.png', text: '4 tomatoes'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/lemon.png', text: '1 cup of lemon juice'},
                    {icon: 'img/chillipeppers.png', text: '½ hot pepper (jalapeno, chilli)'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 4 cups'
            },
            {
                name: 'Dandelion Dillight',
                icon: 'img/dill.png',
                ingredients: [
                    {icon: 'img/dill.png', text: '½ cup of dill weed'},
                    {icon: 'img/dandelion.png', text: '1 cup of dandelion greens'},
                    {icon: 'img/romainlettuce.png', text: '6 leaves of romaine lettuce'},
                    {icon: 'img/cucumber.png', text: '1 cucumber'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/garlic.png', text: '1 cup of garlic greens'},
                    {icon: 'img/lime.png', text: '2 cups of lime juice'},
                    {icon: 'img/water.png', text: '3 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 4 cups'
            },
            {
                name: 'Mediterraneo',
                icon: 'img/rocket.png',
                ingredients: [
                    {icon: 'img/rocket.png', text: '2 cups of rocket salad (arugula)'},
                    {icon: 'img/celery.png', text: '3 stalks of celery'},
                    {icon: 'img/tomato.png', text: '4 tomatoes'},
                    {icon: 'img/basil.png', text: '½ cup of basil'},
                    {icon: 'img/pomegranate.png', text: '1 pomegranate'},
                    {icon: 'img/garlic.png', text: '1 clove garlic'},
                    {icon: 'img/lime.png', text: '1 cup of lemon juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 4 cups'
            },
            {
                name: 'Big Mustard',
                icon: 'img/mustard.png',
                ingredients: [
                    {icon: 'img/mustard.png', text: '2 cups of mustard greens'},
                    {icon: 'img/coriander.png', text: '1 cup of coriander (cilantro)'},
                    {icon: 'img/tomato.png', text: '2 tomatoes'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/basil.png', text: '¼ bunch fresh basil'},
                    {icon: 'img/lemon.png', text: '1 cup of lemon juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 4 cups'
            },
            {
                name: 'Cilantro Supreme',
                icon: 'img/coriander.png',
                ingredients: [
                    {icon: 'img/coriander.png', text: '4 cups of coriander (cilantro)'},
                    {icon: 'img/pepper.png', text: '1 bell pepper'},
                    {icon: 'img/tomato.png', text: '5 cherry tomatoes'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/pear.png', text: '1 pear'},
                    {icon: 'img/lemon.png', text: '1 cup of lemon juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 4 cups'
            },
            {
                name: 'Sir Basil of Lettuce',
                icon: 'img/lettuce.png',
                ingredients: [
                    {icon: 'img/lettuce.png', text: '6 leaves of lettuce'},
                    {icon: 'img/basil.png', text: '¼ bunch fresh basil'},
                    {icon: 'img/onion.png', text: '½ red onion'},
                    {icon: 'img/celery.png', text: '2 stalks celery'},
                    {icon: 'img/avocado.png', text: '¼ avocado'},
                    {icon: 'img/lime.png', text: '1 cup of lime juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Red on Green',
                icon: 'img/kale.png',
                ingredients: [
                    {icon: 'img/kale.png', text: '5 leaves of green kale'},
                    {icon: 'img/dill.png', text: '½ bunch of fresh dill'},
                    {icon: 'img/tomato.png', text: '½ cup of sun-dried tomatoes'},
                    {icon: 'img/garlic.png', text: '3 cloves of garlic'},
                    {icon: 'img/lime.png', text: '½ cup of lime juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Ladybug',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '2½ cups of spinach'},
                    {icon: 'img/tomato.png', text: '3 tomatoes'},
                    {icon: 'img/coriander.png', text: '½ bunch of coriander (cilantro)'},
                    {icon: 'img/garlic.png', text: '1 clove of garlic'},
                    {icon: 'img/pepper.png', text: '½ bell pepper (red)'},
                    {icon: 'img/lime.png', text: '½ cup of lime juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Purple Rose',
                icon: 'img/kale.png',
                ingredients: [
                    {icon: 'img/kale.png', text: '5 leaves of purple kale'},
                    {icon: 'img/tomato.png', text: '2 tomatoes'},
                    {icon: 'img/avocado.png', text: '¼ avocado'},
                    {icon: 'img/garlic.png', text: '3 cloves of garlic'},
                    {icon: 'img/salt.png', text: '½ teaspoon of salt'},
                    {icon: 'img/lime.png', text: '½ cup of lime juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Bitter Moon',
                icon: 'img/celery.png',
                ingredients: [
                    {icon: 'img/celery.png', text: '2 stalks of celery'},
                    {icon: 'img/kale.png', text: '5 leaves of kale (green or purple)'},
                    {icon: 'img/avocado.png', text: '½ avocado'},
                    {icon: 'img/garlic.png', text: '3 cloves of garlic'},
                    {icon: 'img/pepper.png', text: '1 bell pepper'},
                    {icon: 'img/parsley.png', text: '½ bunch of Italian parsley'},
                    {icon: 'img/lime.png', text: '¼ cup of lime juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Green Umbrella',
                icon: 'img/dandelion.png',
                ingredients: [
                    {icon: 'img/dandelion.png', text: '4 cups of dandelion greens'},
                    {icon: 'img/tomato.png', text: '2 tomatoes'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 3 cups'
            },
            {
                name: 'Perfect Date',
                icon: 'img/swisschard.png',
                ingredients: [
                    {icon: 'img/swisschard.png', text: '1 cup of chard'},
                    {icon: 'img/date.png', text: '5 dates'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/mint.png', text: '1 sprig mint'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 4 cups'
            },
            {
                name: 'Queen Crimson',
                icon: 'img/celery.png',
                ingredients: [
                    {icon: 'img/celery.png', text: '5 stalks of celery'},
                    {icon: 'img/spinach.png', text: '½ cup of spinach'},
                    {icon: 'img/grapes.png', text: '1 cup of crimson grapes'},
                    {icon: 'img/papaya.png', text: '1 papaya'}],
                procedure: 'Blend and garnish with sliced fruit',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Chard Vanilla',
                icon: 'img/swisschard.png',
                ingredients: [
                    {icon: 'img/swisschard.png', text: '1 cup of chard'},
                    {icon: 'img/vanilla.png', text: '1 fresh vanilla bean'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/lemon.png', text: '1 lemon with peel'}],
                procedure: 'Blend and decorate with fresh fruit',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Blueberry Moon',
                icon: 'img/lettuce.png',
                ingredients: [
                    {icon: 'img/lettuce.png', text: '3 leaves of lettuce'},
                    {icon: 'img/celery.png', text: '1 stalk of celery'},
                    {icon: 'img/berries.png', text: '2 cups of fresh blueberries'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 3 cups'
            },
            {
                name: 'Raisin Kids',
                icon: 'img/kale.png',
                ingredients: [
                    {icon: 'img/kale.png', text: '2 cups of kale'},
                    {icon: 'img/raisins.png', text: '½ cup of raisins'},
                    {icon: 'img/lime.png', text: '1 lime with peel'},
                    {icon: 'img/banana.png', text: '2 ripe bananas'},
                    {icon: 'img/berries.png', text: '2 cups of blueberries'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 4 cups'
            },
            {
                name: 'Kumquat Pudding',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '2 cups of spinach'},
                    {icon: 'img/kumquat.png', text: '7 kumquats with peel and seeds'},
                    {icon: 'img/pear.png', text: '1 pear'},
                    {icon: 'img/banana.png', text: '2 bananas'},
                    {icon: 'img/water.png', text: '½ cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 5 cups'
            },
            {
                name: 'Mango Parsley Smoothie',
                icon: 'img/parsley.png',
                ingredients: [
                    {icon: 'img/parsley.png', text: '1 bunch of parsley'},
                    {icon: 'img/mango.png', text: '2 mangoes (peeled)'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Chia Green',
                icon: 'img/kale.png',
                ingredients: [
                    {icon: 'img/kale.png', text: '5 leaves of kale'},
                    {icon: 'img/seeds.png', text: '1 cup of of chia seeds jelly (soaked in cup of water for 1 h)'},
                    {icon: 'img/apple.png', text: '4 apples'},
                    {icon: 'img/mint.png', text: '1 sprig mint'},
                    {icon: 'img/lemon.png', text: '½ cup of lemon juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 3 cups'
            },
            {
                name: 'Cinnamon Smoothie',
                icon: 'img/swisschard.png',
                ingredients: [
                    {icon: 'img/swisschard.png', text: '2 cups of chard'},
                    {icon: 'img/pear.png', text: '1 pear'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/cinnamon.png', text: '½ teaspoon cinnamon'},
                    {icon: 'img/nuts.png', text: '½ teaspoon nutmeg'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 3 cups'
            },
            {
                name: 'Lava Potion',
                icon: 'img/kale.png',
                ingredients: [
                    {icon: 'img/kale.png', text: '1 bunch of kale'},
                    {icon: 'img/tomato.png', text: '4 tomatoes'},
                    {icon: 'img/chillipeppers.png', text: '½ inch hot pepper (jalapeno or chilli)'},
                    {icon: 'img/garlic.png', text: '1 clove of garlic'},
                    {icon: 'img/lemon.png', text: '½ cup of lemon juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Wild Green',
                icon: 'img/sorrel.png',
                ingredients: [
                    {icon: 'img/sorrel.png', text: '1½ cup of sorrel'},
                    {icon: 'img/nettle.png', text: '1½ cup of nettle'},
                    {icon: 'img/pear.png', text: '2 pears'},
                    {icon: 'img/banana.png', text: '2 bananas'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 4 cups'
            },
            {
                name: 'Green Planet',
                icon: 'img/celery.png',
                ingredients: [
                    {icon: 'img/celery.png', text: '2 stalks of celery'},
                    {icon: 'img/kale.png', text: '2 cups of kale'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/banana.png', text: '2 bananas'},
                    {icon: 'img/lime.png', text: '1 lime with peel'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 4 cups'
            },
            {
                name: 'Kale Caesar',
                icon: 'img/kale.png',
                ingredients: [
                    {icon: 'img/kale.png', text: '5 leaves of kale'},
                    {icon: 'img/apple.png', text: '1 cup of apple juice'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/mango.png', text: '1 mango'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Moustachio',
                icon: 'img/broccoli.png',
                ingredients: [
                    {icon: 'img/broccoli.png', text: '5 broccoli'},
                    {icon: 'img/pistachio.png', text: '½ cup of pistachio nuts'},
                    {icon: 'img/pear.png', text: '1 pear'},
                    {icon: 'img/peach.png', text: '2 peaches (peeled)'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 3 cups'
            },
            {
                name: 'Rocket Science',
                icon: 'img/rocket.png',
                ingredients: [
                    {icon: 'img/rocket.png', text: '2 cups of rocket salad (arugula)'},
                    {icon: 'img/watermelon.png', text: '1 cup of watermelon'},
                    {icon: 'img/pear.png', text: '1 pear'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 3 cups'
            },
            {
                name: 'Apple Orchard',
                icon: 'img/swisschard.png',
                ingredients: [
                    {icon: 'img/swisschard.png', text: '3 cups of chard'},
                    {icon: 'img/apple.png', text: '3 apples'},
                    {icon: 'img/apple.png', text: '1 cup of apple juice'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 3 cups'
            },
            {
                name: 'Blue Banana',
                icon: 'img/watercress.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '5 leaves of spinach'},
                    {icon: 'img/watercress.png', text: 'handful of watercress'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/berries.png', text: '1 cup of blueberries'},
                    {icon: 'img/cucumber.png', text: '1 cucumber (smaller)'},
                    {icon: 'img/honey.png', text: '1 teaspoon of honey'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 3 cups'
            },
            {
                name: 'Cocoa Green',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '2 handfuls of spinach'},
                    {icon: 'img/cocoa.png', text: '1 teaspoon of cocoa powder'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/apple.png', text: '½ apple'},
                    {icon: 'img/seeds.png', text: '1 teaspoon of flax seeds'},
                    {icon: 'img/vanilla.png', text: 'few scrapes of vanilla pod'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 3 cups'
            },
            {
                name: 'Melon Berry',
                icon: 'img/alfalfa.png',
                ingredients: [
                    {icon: 'img/lettuce.png', text: '2 handfuls of lettuce'},
                    {icon: 'img/alfalfa.png', text: '1 handfuls of alfalfa (or broccoli)'},
                    {icon: 'img/berries.png', text: '1 cup of raspberries'},
                    {icon: 'img/melon.png', text: '2 cups of melon'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Green Detox',
                icon: 'img/celery.png',
                ingredients: [
                    {icon: 'img/celery.png', text: '1 stalk of celery'},
                    {icon: 'img/romainlettuce.png', text: '3 leaves of romain lettuce'},
                    {icon: 'img/cucumber.png', text: '1 cucumber (smaller)'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/pineapple.png', text: '1 cup of pineapple'},
                    {icon: 'img/ginger.png', text: '¼ cup of ginger'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 3 cups'
            },
            {
                name: 'Spring Smoothie',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '1 handful of spinach'},
                    {icon: 'img/kale.png', text: '1 handful of kale'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/seeds.png', text: '1 tablespoon of chia seeds'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 3 cups'
            },
            {
                name: 'Rocket Fuel',
                icon: 'img/rocket.png',
                ingredients: [
                    {icon: 'img/rocket.png', text: '1 handful of rocket salad (arugula)'},
                    {icon: 'img/berries.png', text: '1 cup of blueberries'},
                    {icon: 'img/strawberry.png', text: '1 cup of strawberries'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Smoothie of the Lambs',
                icon: 'img/coriander.png',
                ingredients: [
                    {icon: 'img/coriander.png', text: '1 handful of coriander (cilantro)'},
                    {icon: 'img/greens.png', text: '1 handful of lamb lettuce'},
                    {icon: 'img/pear.png', text: '2 pears'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Green Breakfast',
                icon: 'img/swisschard.png',
                ingredients: [
                    {icon: 'img/swisschard.png', text: '2 leaves of chard'},
                    {icon: 'img/lettuce.png', text: '2 leaves of lettuce'},
                    {icon: 'img/orange.png', text: '1 orange (peeled, no seeds)'},
                    {icon: 'img/grapefruit.png', text: '½ grapefruit (peeled, no seeds)'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 3 cups'
            },
            {
                name: 'Smooth Operator',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '1 handful of spinach'},
                    {icon: 'img/parsley.png', text: '1 cup of parsley'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/papaya.png', text: '1 papaya (no seeds)'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Go Green',
                icon: 'img/swisschard.png',
                ingredients: [
                    {icon: 'img/swisschard.png', text: '1 handful of chard'},
                    {icon: 'img/lettuce.png', text: '1 cup of lettuce'},
                    {icon: 'img/cucumber.png', text: '1 cucumber (smaller)'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Green Passion',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '2 handfuls of spinach'},
                    {icon: 'img/passionfruit.png', text: '1 passion fruit (inside)'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Oasis',
                icon: 'img/kale.png',
                ingredients: [
                    {icon: 'img/kale.png', text: '2 handfuls of kale'},
                    {icon: 'img/date.png', text: '1 cup of dates'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/pear.png', text: '1 pear'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Summer Delight',
                icon: 'img/swisschard.png',
                ingredients: [
                    {icon: 'img/swisschard.png', text: '2 cups of chard'},
                    {icon: 'img/watermelon.png', text: '2 cups of watermelon'},
                    {icon: 'img/cucumber.png', text: '½ cucumber'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/seeds.png', text: '1 teaspoon of chia seed'},
                    {icon: 'img/lemon.png', text: '¼ cup of lemon juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Tropical Island',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '1 handful of spinach'},
                    {icon: 'img/mango.png', text: '1 cup of mango'},
                    {icon: 'img/pineapple.png', text: '1 cup of pineapple'},
                    {icon: 'img/coconut.png', text: '1 cup of coconut milk or water'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Green Party',
                icon: 'img/celery.png',
                ingredients: [
                    {icon: 'img/celery.png', text: '1 stalk of celery'},
                    {icon: 'img/spinach.png', text: '1 cup of spinach'},
                    {icon: 'img/cucumber.png', text: '½ cucumber'},
                    {icon: 'img/melon.png', text: '1 cup of melon'},
                    {icon: 'img/berries.png', text: '1 cup of raspberries'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 3 cups'
            },
            {
                name: 'Froothie',
                icon: 'img/kale.png',
                ingredients: [
                    {icon: 'img/kale.png', text: '2 cups of kale (or chard)'},
                    {icon: 'img/rocket.png', text: '3 leaves of rocket salad (arugula)'},
                    {icon: 'img/wheatgrass.png', text: '¼ cup of wheatgrass'},
                    {icon: 'img/kiwi.png', text: '1 kiwi'},
                    {icon: 'img/peach.png', text: '1 peach'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 3 cups'
            },
            {
                name: 'Sunny Morning',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '2 handfuls of spinach'},
                    {icon: 'img/apple.png', text: '1 Apple'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/berries.png', text: '1 cup of blueberries'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Boosthie',
                icon: 'img/romainlettuce.png',
                ingredients: [
                    {icon: 'img/romainlettuce.png', text: '3 leaves of romain lettuce'},
                    {icon: 'img/spinach.png', text: '1 handful of spinach'},
                    {icon: 'img/pineapple.png', text: '1 slice of pineapple'},
                    {icon: 'img/avocado.png', text: '½ avocado'},
                    {icon: 'img/seeds.png', text: '1 tbsp of flax seed or chia seed (or mixed)'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Little Lamb',
                icon: 'img/greens.png',
                ingredients: [
                    {icon: 'img/greens.png', text: '1 handful of lamb lettuce'},
                    {icon: 'img/cucumber.png', text: '½ cucumber'},
                    {icon: 'img/coriander.png', text: '1 handful of coriander (cilantro)'},
                    {icon: 'img/dandelion.png', text: '1 handful of dandelion greens'},
                    {icon: 'img/avocado.png', text: '½ avocado'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/berries.png', text: '½ cup of blueberries'},
                    {icon: 'img/watermelon.png', text: '1 cup of watermelon'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2-3 cups'
            },
            {
                name: 'Smooth Snack',
                icon: 'img/lettuce.png',
                ingredients: [
                    {icon: 'img/lettuce.png', text: '1 handful of lettuce'},
                    {icon: 'img/cucumber.png', text: '½ cucumber'},
                    {icon: 'img/pineapple.png', text: '1 slice of pineapple'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/berries.png', text: '½ cup of blueberries'},
                    {icon: 'img/seeds.png', text: '1 tbsp of flax seed'},
                    {icon: 'img/date.png', text: '4 dates'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Black Eye',
                icon: 'img/kale.png',
                ingredients: [
                    {icon: 'img/kale.png', text: '1 handful of kale'},
                    {icon: 'img/plum.png', text: '3 plums'},
                    {icon: 'img/orange.png', text: '1 orange'},
                    {icon: 'img/mint.png', text: '1 sprig of mint'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Green Cab',
                icon: 'img/cabbage.png',
                ingredients: [
                    {icon: 'img/cabbage.png', text: '1 cup of cabbage'},
                    {icon: 'img/alfalfa.png', text: '1 handful of alfalfa sprouts'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/strawberry.png', text: '1 cup of strawberries'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Cherry on Top',
                icon: 'img/swisschard.png',
                ingredients: [
                    {icon: 'img/swisschard.png', text: '1 handful of chard (or spinach)'},
                    {icon: 'img/cherry.png', text: '2 cups of cherries'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/berries.png', text: '1 cup of blueberries'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Lamb Spring',
                icon: 'img/greens.png',
                ingredients: [
                    {icon: 'img/greens.png', text: '1 handful of lamb lettuce'},
                    {icon: 'img/watercress.png', text: '1 handful of watercress'},
                    {icon: 'img/mint.png', text: '2 leaves of mint'},
                    {icon: 'img/cucumber.png', text: '½ cucumber'},
                    {icon: 'img/mango.png', text: '½ mango'},
                    {icon: 'img/banana.png', text: '½ banana'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Berry Kick',
                icon: 'img/mustard.png',
                ingredients: [
                    {icon: 'img/mustard.png', text: '1 handful of mustard greens'},
                    {icon: 'img/mint.png', text: '2 leaves of mint'},
                    {icon: 'img/berries.png', text: '1 cup of raspberries'},
                    {icon: 'img/strawberry.png', text: '1 cup of strawberries'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Dandelmelon Smoothie',
                icon: 'img/dandelion.png',
                ingredients: [
                    {icon: 'img/dandelion.png', text: '2 leaves of dandelion'},
                    {icon: 'img/kale.png', text: '2 leaves of kale'},
                    {icon: 'img/watermelon.png', text: '3 cups of watermelon'},
                    {icon: 'img/orange.png', text: '1 orange'},
                    {icon: 'img/strawberry.png', text: '1 cup of strawberries'},
                    {icon: 'img/banana.png', text: '½ banana'},
                    {icon: 'img/avocado.png', text: '½ avocado'},
                    {icon: 'img/lemon.png', text: '½ cup of lemon or lime juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 3 cups'
            },
            {
                name: 'Body Cleaner',
                icon: 'img/cucumber.png',
                ingredients: [
                    {icon: 'img/cucumber.png', text: '1 cucumber'},
                    {icon: 'img/parsley.png', text: '2 sprigs of parsley'},
                    {icon: 'img/apple.png', text: '2 apples'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/honey.png', text: '1 tbsp of honey'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Manilla Smoothie',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '1 handful of spinach'},
                    {icon: 'img/mint.png', text: '3 leaves of mint'},
                    {icon: 'img/vanilla.png', text: '½ vanilla pod'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Parsley Lite',
                icon: 'img/parsley.png',
                ingredients: [
                    {icon: 'img/parsley.png', text: '1 cup of parsley'},
                    {icon: 'img/berries.png', text: '2 cups of blueberries'},
                    {icon: 'img/banana.png', text: '2 bananas'},
                    {icon: 'img/mango.png', text: '1 mango'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Sweetropico',
                icon: 'img/kale.png',
                ingredients: [
                    {icon: 'img/kale.png', text: '1 handful of kale'},
                    {icon: 'img/pineapple.png', text: '½ pineapple'},
                    {icon: 'img/mango.png', text: '½ mango'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/coconut.png', text: '1 cup of coconut milk'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Traffic Lights',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '1 handful of spinach'},
                    {icon: 'img/orange.png', text: '1 orange'},
                    {icon: 'img/strawberry.png', text: '1 cup of strawberries'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Cream Green',
                icon: 'img/coriander.png',
                ingredients: [
                    {icon: 'img/coriander.png', text: '1 handful of coriander (cilantro)'},
                    {icon: 'img/celery.png', text: '1 stalk of celery'},
                    {icon: 'img/tomato.png', text: '2 tomatoes'},
                    {icon: 'img/watermelon.png', text: '1 cup of watermelon'},
                    {icon: 'img/avocado.png', text: '½ avocado'},
                    {icon: 'img/lemon.png', text: '1 squeeze of lemon'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Spinnamon Smoothie',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '1 handful of spinach'},
                    {icon: 'img/carrot.png', text: '1 carrot'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/cinnamon.png', text: '1 tsp of cinnamon'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Dandelicious Smoothie',
                icon: 'img/dandelion.png',
                ingredients: [
                    {icon: 'img/dandelion.png', text: '1 bunch of dandelion greens'},
                    {icon: 'img/lemon.png', text: '2 squeezes of lemon'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/seeds.png', text: '1 tbsp of chia seed'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Boomberry Green',
                icon: 'img/lettuce.png',
                ingredients: [
                    {icon: 'img/lettuce.png', text: '2 lettuce leaves'},
                    {icon: 'img/spinach.png', text: '1 handful of spinach or kale'},
                    {icon: 'img/berries.png', text: '1 cup of blackberries'},
                    {icon: 'img/orange.png', text: '1 orange'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Blue on Black',
                icon: 'img/swisschard.png',
                ingredients: [
                    {icon: 'img/swisschard.png', text: '2 handfuls of chard'},
                    {icon: 'img/berries.png', text: '1 cup of blueberries'},
                    {icon: 'img/berries.png', text: '1 cup of blackberries'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Peachoco Smoothie',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '2 handfuls of spinach'},
                    {icon: 'img/peach.png', text: '1 peach'},
                    {icon: 'img/cocoa.png', text: '2 tbsp of cacao'},
                    {icon: 'img/berries.png', text: '1 cup of raspberries'},
                    {icon: 'img/banana.png', text: '2 bananas'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Basil Berry',
                icon: 'img/basil.png',
                ingredients: [
                    {icon: 'img/basil.png', text: '1 handful of basil leaves'},
                    {icon: 'img/berries.png', text: '2 cup of mixed berries'},
                    {icon: 'img/seeds.png', text: '1 tbsp of flax or pumpkin seed'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Iron Seed',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '1 handful of spinach'},
                    {icon: 'img/berries.png', text: '1 cup of blackberries'},
                    {icon: 'img/seeds.png', text: '1 tbsp of flax or pumpkin seed'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Green Flame',
                icon: 'img/parsley.png',
                ingredients: [
                    {icon: 'img/parsley.png', text: '½ handful of parsley'},
                    {icon: 'img/spinach.png', text: '1 handful of spinach'},
                    {icon: 'img/celery.png', text: '½ cup of celery'},
                    {icon: 'img/cucumber.png', text: '½ cup of cucumber'},
                    {icon: 'img/carrot.png', text: '1 cup of carrot'},
                    {icon: 'img/chillipeppers.png', text: '½ inch of hot pepper'},
                    {icon: 'img/lemon.png', text: '½ cup of lemon juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Lamberry Smoothie',
                icon: 'img/greens.png',
                ingredients: [
                    {icon: 'img/greens.png', text: '2 handfuls of lamb lettuce'},
                    {icon: 'img/pomegranate.png', text: 'juice of 2 pomegranates'},
                    {icon: 'img/berries.png', text: '1 cup of blueberries'},
                    {icon: 'img/berries.png', text: '½ cup of dried goji berries'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Wake Up Smoothie',
                icon: 'img/kale.png',
                ingredients: [
                    {icon: 'img/kale.png', text: '1 handful of kale or spinach'},
                    {icon: 'img/cucumber.png', text: '½ cucumber'},
                    {icon: 'img/avocado.png', text: '½ avocado'},
                    {icon: 'img/berries.png', text: '1 cup of raspberries'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Survive Til Lunch',
                icon: 'img/broccoli.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '1 handful of spinach'},
                    {icon: 'img/broccoli.png', text: '3 broccoli'},
                    {icon: 'img/celery.png', text: '2 stalks of celery'},
                    {icon: 'img/pineapple.png', text: '½ cup of pineapple'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/strawberry.png', text: '½ cup of strawberries'},
                    {icon: 'img/banana.png', text: '½ banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Choco Orange Blue',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '2 handfuls of spinach'},
                    {icon: 'img/cocoa.png', text: '1 tbsp of cacao'},
                    {icon: 'img/carrot.png', text: '3 carrots'},
                    {icon: 'img/berries.png', text: '1 cup of blueberries'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Crunchy Smoothie',
                icon: 'img/romainlettuce.png',
                ingredients: [
                    {icon: 'img/romainlettuce.png', text: '4 leaves of romain lettuce'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/avocado.png', text: '1 avocado (small)'},
                    {icon: 'img/berries.png', text: '1 cup of blackberries'},
                    {icon: 'img/nuts.png', text: '¼ cup of almonds or other nuts'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Green Booster',
                icon: 'img/broccoli.png',
                ingredients: [
                    {icon: 'img/broccoli.png', text: '3 broccoli'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/pear.png', text: '1 pear'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Passion in Red',
                icon: 'img/coriander.png',
                ingredients: [
                    {icon: 'img/coriander.png', text: '1 handful of coriander (cilantro)'},
                    {icon: 'img/cucumber.png', text: '¼ cup of cucumber'},
                    {icon: 'img/passionfruit.png', text: '2 passion fruits'},
                    {icon: 'img/strawberry.png', text: '1 cup of strawberries'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Smoothie Appearance',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '1 handful of spinach'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/pear.png', text: '1 pear'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Alligator',
                icon: 'img/swisschard.png',
                ingredients: [
                    {icon: 'img/swisschard.png', text: '1 handful of chard'},
                    {icon: 'img/kiwi.png', text: '2 kiwis'},
                    {icon: 'img/mint.png', text: '2 leaves of mint'},
                    {icon: 'img/lime.png', text: '½ cup of lime juice'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/avocado.png', text: '½ avocado'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Beetlettjuice',
                icon: 'img/lettuce.png',
                ingredients: [
                    {icon: 'img/lettuce.png', text: '1 handful of lettuce'},
                    {icon: 'img/beetroot.png', text: '1 beetroot'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/avocado.png', text: '½ avocado'},
                    {icon: 'img/seeds.png', text: '1 tsp of chia seed (milled)'},
                    {icon: 'img/lemon.png', text: '½ cup of lemon juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Light Bulb',
                icon: 'img/fennel.png',
                ingredients: [
                    {icon: 'img/fennel.png', text: '½ fennel bulb'},
                    {icon: 'img/orange.png', text: '½ orange'},
                    {icon: 'img/banana.png', text: '½ banana'},
                    {icon: 'img/avocado.png', text: '½ avocado'},
                    {icon: 'img/mint.png', text: '3 mint leaves'},
                    {icon: 'img/lime.png', text: '½ cup of lime juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Sprouts from Brussels',
                icon: 'img/brussels.png',
                ingredients: [
                    {icon: 'img/brussels.png', text: '2 brussel sprouts'},
                    {icon: 'img/cucumber.png', text: '½ cucumber'},
                    {icon: 'img/apple.png', text: '2 apples'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/lemon.png', text: '¼ cup of lemon juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Fox Tail',
                icon: 'img/wheatgrass.png',
                ingredients: [
                    {icon: 'img/wheatgrass.png', text: '½ cup of wheatgrass'},
                    {icon: 'img/orange.png', text: '1 orange'},
                    {icon: 'img/kiwi.png', text: '1 kiwi'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/berries.png', text: '½ cup of raspberries'},
                    {icon: 'img/lemon.png', text: '¼ cup of lemon juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Raw Power',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '1 handful of spinach'},
                    {icon: 'img/beetroot.png', text: '1 beetroot'},
                    {icon: 'img/celery.png', text: '1 stalk of celery'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/berries.png', text: '½ cup of blueberries'},
                    {icon: 'img/carrot.png', text: '1 carrot'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Sweet & Sour Smoothie',
                icon: 'img/greens.png',
                ingredients: [
                    {icon: 'img/greens.png', text: '2 handfuls of spring greens'},
                    {icon: 'img/apple.png', text: '2 apples'},
                    {icon: 'img/avocado.png', text: '½ avocado'},
                    {icon: 'img/banana.png', text: '½ banana'},
                    {icon: 'img/lemon.png', text: '½ cup of lemon juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Quick Detox Potion',
                icon: 'img/celery.png',
                ingredients: [
                    {icon: 'img/celery.png', text: '2 stalks of celery'},
                    {icon: 'img/cucumber.png', text: '½ cucumber'},
                    {icon: 'img/carrot.png', text: '2 carrots'},
                    {icon: 'img/apple.png', text: '2 apples'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/lemon.png', text: '¼ cup of lemon juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Melonkale Yogurt',
                icon: 'img/kale.png',
                ingredients: [
                    {icon: 'img/kale.png', text: '2 leaves of kale'},
                    {icon: 'img/melon.png', text: '2 cups of honeydew melon'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/yogurt.png', text: '¼ cup of organic yogurt'},
                    {icon: 'img/lime.png', text: '¼ cup of lime juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Honey Spear',
                icon: 'img/lettuce.png',
                ingredients: [
                    {icon: 'img/lettuce.png', text: '2 leaves of lettuce'},
                    {icon: 'img/pear.png', text: '1 pear'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/honey.png', text: '1 tbsp of honey'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Strawberry Island',
                icon: 'img/celery.png',
                ingredients: [
                    {icon: 'img/celery.png', text: '2 stalks of celery'},
                    {icon: 'img/papaya.png', text: '1 papaya'},
                    {icon: 'img/banana.png', text: '½ banana'},
                    {icon: 'img/pineapple.png', text: '1 slice of pineapple'},
                    {icon: 'img/strawberry.png', text: '1 cup of strawberries'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Detox Yogurt',
                icon: 'img/cucumber.png',
                ingredients: [
                    {icon: 'img/cucumber.png', text: '1 cucumber'},
                    {icon: 'img/grapefruit.png', text: '½ grapefruit'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/yogurt.png', text: '½ cup of yogurt'},
                    {icon: 'img/berries.png', text: '1 cup of raspberries'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Mon Cherry',
                icon: 'img/swisschard.png',
                ingredients: [
                    {icon: 'img/swisschard.png', text: '½ handful of chard'},
                    {icon: 'img/cherry.png', text: '2 cups of cherries'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/berries.png', text: '1 cup of raspberries'},
                    {icon: 'img/cocoa.png', text: '1 tsp of cacao'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Pom Pom',
                icon: 'img/kale.png',
                ingredients: [
                    {icon: 'img/kale.png', text: '2 leaves of kale'},
                    {icon: 'img/pomegranate.png', text: 'juice of 2 pomegranates'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/strawberry.png', text: '1 cup of strawberries'},
                    {icon: 'img/berries.png', text: '1 cup of raspberries'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Ay Coco Mango',
                icon: 'img/lettuce.png',
                ingredients: [
                    {icon: 'img/lettuce.png', text: '1 handful of lettuce'},
                    {icon: 'img/mango.png', text: '1 mango'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/coconut.png', text: '1 tbsp of coconut cream'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Mondo Verde',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '1 leaf of spinach'},
                    {icon: 'img/pineapple.png', text: '2 slices of pineapple'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/peach.png', text: '1 peach'},
                    {icon: 'img/avocado.png', text: '½ avocado'},
                    {icon: 'img/nuts.png', text: '2 tbsp of almonds'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Nutty Berry',
                icon: 'img/greens.png',
                ingredients: [
                    {icon: 'img/greens.png', text: '1 handful of spring greens'},
                    {icon: 'img/nuts.png', text: '1 tbsp of any nuts'},
                    {icon: 'img/berries.png', text: '1 cup of blueberries'},
                    {icon: 'img/peach.png', text: '1 peach'},
                    {icon: 'img/vanilla.png', text: '¼ inch of vanilla'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Green Nectar',
                icon: 'img/broccoli.png',
                ingredients: [
                    {icon: 'img/broccoli.png', text: '1 broccoli'},
                    {icon: 'img/nectarine.png', text: '2 nectarines'},
                    {icon: 'img/pineapple.png', text: '2 slices of pineapple'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/vanilla.png', text: '¼ inch of vanilla'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Yogoorthie',
                icon: 'img/kale.png',
                ingredients: [
                    {icon: 'img/kale.png', text: '1 cup of kale'},
                    {icon: 'img/melon.png', text: '½ cantaloupe melon'},
                    {icon: 'img/strawberry.png', text: '1 cup of strawberries'},
                    {icon: 'img/banana.png', text: '½ banana'},
                    {icon: 'img/yogurt.png', text: '1 cup of yogurt'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Passion of Mango',
                icon: 'img/celery.png',
                ingredients: [
                    {icon: 'img/celery.png', text: '1 stalk of celery'},
                    {icon: 'img/mango.png', text: '1 mango'},
                    {icon: 'img/passionfruit.png', text: '3 passion fruit'},
                    {icon: 'img/pineapple.png', text: '1 cup of pineapple'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Green Punch',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '1 handful of spinach'},
                    {icon: 'img/pineapple.png', text: '1 slice of pineapple'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/strawberry.png', text: '1 cup of strawberries'},
                    {icon: 'img/nectarine.png', text: '1 nectarine'},
                    {icon: 'img/seeds.png', text: '1 tbsp of flax seed'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Green Chocolate',
                icon: 'img/romainlettuce.png',
                ingredients: [
                    {icon: 'img/romainlettuce.png', text: '1 leaf of romain lettuce'},
                    {icon: 'img/greens.png', text: '1 handful of any greens'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/berries.png', text: '½ cup of blueberries'},
                    {icon: 'img/nuts.png', text: '1 cup of almond milk'},
                    {icon: 'img/cocoa.png', text: '1 tsp of cacao powder'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Pine Tree',
                icon: 'img/kale.png',
                ingredients: [
                    {icon: 'img/kale.png', text: '1 handful of kale or spinach'},
                    {icon: 'img/berries.png', text: '2 cups of frozen berries'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/orange.png', text: '½ orange'},
                    {icon: 'img/lemon.png', text: '1 tsp of lemon juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Diet Yogurt',
                icon: 'img/lettuce.png',
                ingredients: [
                    {icon: 'img/lettuce.png', text: '3 leaves of lettuce'},
                    {icon: 'img/pineapple.png', text: '2 slices of pineapple'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/grapefruit.png', text: '½ grapefruit'},
                    {icon: 'img/lime.png', text: '1 tsp of lime juice'},
                    {icon: 'img/yogurt.png', text: '1 cup of yogurt'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Coco Banana',
                icon: 'img/greens.png',
                ingredients: [
                    {icon: 'img/greens.png', text: '1 leaf of any greens'},
                    {icon: 'img/banana.png', text: '2 bananas (ripe)'},
                    {icon: 'img/berries.png', text: '½ cup of any berries'},
                    {icon: 'img/cocoa.png', text: '1 tbsp of cacao powder'},
                    {icon: 'img/coconut.png', text: '1 cup of coconut water or milk'},
                    {icon: 'img/honey.png', text: '1 tsp of honey'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Vanilla Creamberry',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '1 handful of spinach'},
                    {icon: 'img/strawberry.png', text: '1 cup of strawberries'},
                    {icon: 'img/berries.png', text: '½ cup of goji berries'},
                    {icon: 'img/banana.png', text: '2 bananas'},
                    {icon: 'img/vanilla.png', text: '1 tsp of vanilla extract'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend and garnish with blueberries',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Smoothie Salad',
                icon: 'img/cucumber.png',
                ingredients: [
                    {icon: 'img/cucumber.png', text: '1 cucumber'},
                    {icon: 'img/tomato.png', text: '1 tomato'},
                    {icon: 'img/coriander.png', text: '1 handful of coriander (cilantro)'},
                    {icon: 'img/romainlettuce.png', text: '3 leaves of romain lettuce'},
                    {icon: 'img/celery.png', text: '1 stalk of celery'},
                    {icon: 'img/chives.png', text: 'a small bunch of chives'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/yogurt.png', text: '1 cup of yogurt'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend and garnish with blueberries',
                servings: 'Servings: 3-4 cups'
            },
            {
                name: 'Coffee for Breakfast',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '1 handful of spinach'},
                    {icon: 'img/coffee.png', text: '1 cup of coffee (cooled)'},
                    {icon: 'img/berries.png', text: '½ cup of blueberries'},
                    {icon: 'img/nuts.png', text: '½ cup of almonds'},
                    {icon: 'img/banana.png', text: '2 bananas'},
                    {icon: 'img/honey.png', text: '1 tsp of honey'},
                    {icon: 'img/cinnamon.png', text: '1 sprinkle of cinnamon'},
                    {icon: 'img/water.png', text: '½ cup of milk'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Orange Romance',
                icon: 'img/coriander.png',
                ingredients: [
                    {icon: 'img/coriander.png', text: '1 handful of coriander (cilantro)'},
                    {icon: 'img/strawberry.png', text: '1 cup of strawberries'},
                    {icon: 'img/orange.png', text: '1 orange'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/honey.png', text: '1 tsp of honey'},
                    {icon: 'img/orange.png', text: '1 cup of orange juice'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Blueberry Yogurt',
                icon: 'img/lettuce.png',
                ingredients: [
                    {icon: 'img/lettuce.png', text: '2 leaves of lettuce'},
                    {icon: 'img/berries.png', text: '1 cup of blueberries'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/yogurt.png', text: '1 cup of yogurt'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Smoothie Tropicana',
                icon: 'img/celery.png',
                ingredients: [
                    {icon: 'img/celery.png', text: '1 stalk of celery'},
                    {icon: 'img/pineapple.png', text: '1 cup of pineapple'},
                    {icon: 'img/mango.png', text: '1 mango'},
                    {icon: 'img/kiwi.png', text: '1 kiwi'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/orange.png', text: '1 orange'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Berry White',
                icon: 'img/cucumber.png',
                ingredients: [
                    {icon: 'img/cucumber.png', text: '1 cucumber'},
                    {icon: 'img/berries.png', text: '2 cups of mixed berries'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/yogurt.png', text: '1 cup of yogurt'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Green Pina Colada',
                icon: 'img/greens.png',
                ingredients: [
                    {icon: 'img/greens.png', text: '1 handful of spring greens'},
                    {icon: 'img/pineapple.png', text: '1 cup of pineapple'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/coconut.png', text: '1 cup of coconut cream'},
                    {icon: 'img/seeds.png', text: '1 tbsp of chia seed'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Butterfly',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '1 handful of spinach'},
                    {icon: 'img/berries.png', text: '1 cup of mixed berries'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/cocoa.png', text: '1 tsp of cacao powder'},
                    {icon: 'img/peanutbutter.png', text: '1 tbsp of peanut butter'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Smoothie Jam',
                icon: 'img/dandelion.png',
                ingredients: [
                    {icon: 'img/dandelion.png', text: '1 handful of dandelion greens'},
                    {icon: 'img/berries.png', text: '2 cups of raspberries'},
                    {icon: 'img/strawberry.png', text: '1 cups of strawberries'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/yogurt.png', text: '1 cup of yogurt'},
                    {icon: 'img/vanilla.png', text: '1 tsp of vanilla extract'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Red Polka Dot',
                icon: 'img/romainlettuce.png',
                ingredients: [
                    {icon: 'img/romainlettuce.png', text: '1 handful of romain lettuce'},
                    {icon: 'img/pomegranate.png', text: 'juice of 1 pomegranate'},
                    {icon: 'img/strawberry.png', text: '1 cups of strawberries'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/yogurt.png', text: '1 tbsp of yogurt'},
                    {icon: 'img/honey.png', text: '1 tsp of honey'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Iceberg',
                icon: 'img/rocket.png',
                ingredients: [
                    {icon: 'img/rocket.png', text: '1 handful of rocket salad (arugula)'},
                    {icon: 'img/berries.png', text: '1 cup of frozen berries'},
                    {icon: 'img/banana.png', text: '½ banana'},
                    {icon: 'img/cocoa.png', text: '1 tbsp of cacao powder'},
                    {icon: 'img/vanilla.png', text: '1 tsp of vanilla extract'},
                    {icon: 'img/honey.png', text: '1 tsp of honey'},
                    {icon: 'img/cinnamon.png', text: 'sprinkle of cinnamon'},
                    {icon: 'img/icecube.png', text: '2 cups of ice cubes'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Yogomelon Smoothie',
                icon: 'img/cucumber.png',
                ingredients: [
                    {icon: 'img/cucumber.png', text: '1 cucumber'},
                    {icon: 'img/watermelon.png', text: '2 cups of watermelon'},
                    {icon: 'img/yogurt.png', text: '1 cup of yogurt'},
                    {icon: 'img/date.png', text: '2 dates'},
                    {icon: 'img/honey.png', text: '1 tbsp of honey'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Ginger Kale',
                icon: 'img/kale.png',
                ingredients: [
                    {icon: 'img/kale.png', text: '1 handful of kale'},
                    {icon: 'img/banana.png', text: '2 bananas'},
                    {icon: 'img/ginger.png', text: '½ inch ginger'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Almost an Apple Pie',
                icon: 'img/lettuce.png',
                ingredients: [
                    {icon: 'img/lettuce.png', text: '1 handful of lettuce'},
                    {icon: 'img/apple.png', text: '2 apples'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/yogurt.png', text: '2 tbsp of yogurt'},
                    {icon: 'img/cinnamon.png', text: '1 tsp of cinnamon'},
                    {icon: 'img/honey.png', text: '1 tsp of honey'},
                    {icon: 'img/nuts.png', text: '½ cup of almonds'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Orange Elixir',
                icon: 'img/alfalfa.png',
                ingredients: [
                    {icon: 'img/alfalfa.png', text: '1 cup of alfalfa'},
                    {icon: 'img/orange.png', text: '1 orange'},
                    {icon: 'img/carrot.png', text: '1 carrot'},
                    {icon: 'img/banana.png', text: '½  banana'},
                    {icon: 'img/strawberry.png', text: '½ cup of strawberries'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Hedgehog',
                icon: 'img/nettle.png',
                ingredients: [
                    {icon: 'img/nettle.png', text: '1 cup of nettle'},
                    {icon: 'img/apricot.png', text: '½ cup of apricot'},
                    {icon: 'img/carrot.png', text: '1 carrot'},
                    {icon: 'img/berries.png', text: '½ cup of raspberries'},
                    {icon: 'img/berries.png', text: '½ cup of blueberries'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Lift Me Up',
                icon: 'img/basil.png',
                ingredients: [
                    {icon: 'img/basil.png', text: '2 leaves of basil'},
                    {icon: 'img/lemonbalm.png', text: '¼ cup of lemon balm'},
                    {icon: 'img/carrot.png', text: '½ cup of carrot'},
                    {icon: 'img/mango.png', text: '½ mango'},
                    {icon: 'img/juice.png', text: '1 tbsp of lemon juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Sourprise',
                icon: 'img/parsley.png',
                ingredients: [
                    {icon: 'img/parsley.png', text: '1 cup of parsley (fresh)'},
                    {icon: 'img/basil.png', text: '½ cup of basil'},
                    {icon: 'img/berries.png', text: '1 cup of raspberries'},
                    {icon: 'img/apricot.png', text: '1 cup of apricot'},
                    {icon: 'img/pear.png', text: '1 pear'},
                    {icon: 'img/oil.png', text: '1 tbsp of balsamic vinegar'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Cramp Killer Smoothie',
                icon: 'img/beetroot.png',
                ingredients: [
                    {icon: 'img/beetroot.png', text: '1 cup of beetroot greens'},
                    {icon: 'img/tomato.png', text: '1 tomato'},
                    {icon: 'img/orange.png', text: '1 orange'},
                    {icon: 'img/berries.png', text: '½ cup of mixed berries'},
                    {icon: 'img/date.png', text: '3 dates'},
                    {icon: 'img/banana.png', text: '½ banana'},
                    {icon: 'img/ginger.png', text: '½ tsp of ginger'},
                    {icon: 'img/lemon.png', text: '1 tsp of lemon juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Stargazer',
                icon: 'img/borage.png',
                ingredients: [
                    {icon: 'img/borage.png', text: '1 cup of borage leaves'},
                    {icon: 'img/beetroot.png', text: '1 beet'},
                    {icon: 'img/orange.png', text: '1 orange'},
                    {icon: 'img/berries.png', text: '½ cup of raspberries'},
                    {icon: 'img/peach.png', text: '1 peach'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Teen Green',
                icon: 'img/dandelion.png',
                ingredients: [
                    {icon: 'img/dandelion.png', text: '1 handful of dandelion greens'},
                    {icon: 'img/mango.png', text: '1 mango'},
                    {icon: 'img/apricot.png', text: '1 cup of apricots'},
                    {icon: 'img/melon.png', text: '1 cup of cantaloupe'},
                    {icon: 'img/carrot.png', text: '1 carrot (small)'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Smoothie Cleaner',
                icon: 'img/celery.png',
                ingredients: [
                    {icon: 'img/celery.png', text: '1 stalk of celery'},
                    {icon: 'img/cucumber.png', text: '1 cucumber'},
                    {icon: 'img/watermelon.png', text: '1 cup of watermelon'},
                    {icon: 'img/berries.png', text: '¼ cup of blueberries'},
                    {icon: 'img/juice.png', text: '1 cup of cranberry juice'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Dandelion Tonic',
                icon: 'img/dandelion.png',
                ingredients: [
                    {icon: 'img/dandelion.png', text: '1 handful of dandelion greens'},
                    {icon: 'img/parsley.png', text: '1 tbsp of parsley'},
                    {icon: 'img/melon.png', text: '1 cup of cantaloupe'},
                    {icon: 'img/berries.png', text: '¼ cup of blueberries'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Green Grin',
                icon: 'img/fennel.png',
                ingredients: [
                    {icon: 'img/fennel.png', text: '1 fennel bulb'},
                    {icon: 'img/parsley.png', text: '1 tbsp of parsley'},
                    {icon: 'img/banana.png', text: '1 banana (ripe)'},
                    {icon: 'img/strawberry.png', text: '¼ cup of strawberries'},
                    {icon: 'img/berries.png', text: '¼ cup of raspberries'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Pango Manaya',
                icon: 'img/mustard.png',
                ingredients: [
                    {icon: 'img/mustard.png', text: '2 mustard greens'},
                    {icon: 'img/mango.png', text: '1 mango'},
                    {icon: 'img/papaya.png', text: '1 papaya'},
                    {icon: 'img/banana.png', text: '1 banana (ripe)'},
                    {icon: 'img/apple.png', text: '1 cup of apple juice'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Sweet Dreams',
                icon: 'img/mint.png',
                ingredients: [
                    {icon: 'img/kale.png', text: '1 handful of kale'},
                    {icon: 'img/mint.png', text: '1 sprig of mint'},
                    {icon: 'img/nuts.png', text: '1 tbsp of almonds'},
                    {icon: 'img/banana.png', text: '½  banana'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Green Digestive',
                icon: 'img/fennel.png',
                ingredients: [
                    {icon: 'img/fennel.png', text: '1 fennel bulb'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/kiwi.png', text: '1 kiwi'},
                    {icon: 'img/grapes.png', text: '½ cup of grapes'},
                    {icon: 'img/cinnamon.png', text: '¼ tsp of cinnamon'},
                    {icon: 'img/cloves.png', text: '1 clove'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Painkiller',
                icon: 'img/cabbage.png',
                ingredients: [
                    {icon: 'img/cabbage.png', text: '1 cup of cabbage (shredded)'},
                    {icon: 'img/tomato.png', text: '1 tomato'},
                    {icon: 'img/lemon.png', text: '½ cup of lemon juice'},
                    {icon: 'img/cayenne.png', text: '½ tsp of cayenne pepper'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 1 cup'
            },
            {
                name: 'Muscle Relaxant Smoothie',
                icon: 'img/celery.png',
                ingredients: [
                    {icon: 'img/celery.png', text: '1 cup of celery'},
                    {icon: 'img/beetroot.png', text: '1 beet'},
                    {icon: 'img/carrot.png', text: '1 carrot'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Popeye the Sailor',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '2 cups of spinach'},
                    {icon: 'img/beetroot.png', text: '1 beet'},
                    {icon: 'img/carrot.png', text: '1 cup of carrot juice'},
                    {icon: 'img/dandelion.png', text: '1 dandelion root'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Flu Fighter Smoothie',
                icon: 'img/kale.png',
                ingredients: [
                    {icon: 'img/kale.png', text: '1 kale leaf'},
                    {icon: 'img/spinach.png', text: '2 cups of spinach'},
                    {icon: 'img/celery.png', text: '1 stalk of celery'},
                    {icon: 'img/carrot.png', text: '1 carrot'},
                    {icon: 'img/cucumber.png', text: '½ cucumber'},
                    {icon: 'img/garlic.png', text: '2 cloves of garlic'},
                    {icon: 'img/ginger.png', text: '½ inch of fresh ginger root'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Figaro',
                icon: 'img/celery.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '1 cup of spinach'},
                    {icon: 'img/beetroot.png', text: '1 beet'},
                    {icon: 'img/celery.png', text: '1 stalk of celery'},
                    {icon: 'img/fig.png', text: '1 cup of figs'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Orange Sprout',
                icon: 'img/brussels.png',
                ingredients: [
                    {icon: 'img/brussels.png', text: '1 cup of brussel sprouts'},
                    {icon: 'img/orange.png', text: '1 orange'},
                    {icon: 'img/avocado.png', text: '½ avocado'},
                    {icon: 'img/banana.png', text: '½ banana'},
                    {icon: 'img/fig.png', text: '4 figs'},
                    {icon: 'img/lemon.png', text: '2 tbsp of lemon juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Pina Vocada',
                icon: 'img/greens.png',
                ingredients: [
                    {icon: 'img/greens.png', text: '1 cup of spring greens'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/pineapple.png', text: '1 cup of pineapple'},
                    {icon: 'img/berries.png', text: '1 cup of raspberries'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Applause',
                icon: 'img/sorrel.png',
                ingredients: [
                    {icon: 'img/greens.png', text: '1 cup of sorrel'},
                    {icon: 'img/apple.png', text: '2 apples'},
                    {icon: 'img/grapes.png', text: '1 cup of grapes'},
                    {icon: 'img/juice.png', text: '1 cup of apple juice'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Smooth & Crisp',
                icon: 'img/celery.png',
                ingredients: [
                    {icon: 'img/celery.png', text: '1 cup of celery'},
                    {icon: 'img/apple.png', text: '2 apples'},
                    {icon: 'img/berries.png', text: '½ cup of frozen raspberries'},
                    {icon: 'img/banana.png', text: '½  banana'},
                    {icon: 'img/oatmeal.png', text: '1 tbsp of oats'},
                    {icon: 'img/cinnamon.png', text: '¼ tsp of ground cinnamon'},
                    {icon: 'img/juice.png', text: '1 cup of apple juice'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Supernova',
                icon: 'img/nettle.png',
                ingredients: [
                    {icon: 'img/nettle.png', text: '1 cup of nettle'},
                    {icon: 'img/mint.png', text: '2 mint leaves'},
                    {icon: 'img/apple.png', text: '2 apples'},
                    {icon: 'img/berries.png', text: '2 cups of blackberries'},
                    {icon: 'img/banana.png', text: '½  banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Mint Explosion',
                icon: 'img/cucumber.png',
                ingredients: [
                    {icon: 'img/cucumber.png', text: '1 cucumber'},
                    {icon: 'img/mint.png', text: '1 sprig of mint'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/kiwi.png', text: '1  kiwi'},
                    {icon: 'img/yogurt.png', text: '1 cup of yogurt'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Spicy Green Cocktail',
                icon: 'img/parsley.png',
                ingredients: [
                    {icon: 'img/parsley.png', text: '1 cup of parsley'},
                    {icon: 'img/apple.png', text: '3 apples'},
                    {icon: 'img/ginger.png', text: '½ inch of ginger root'},
                    {icon: 'img/berries.png', text: '¼ cup of cranberry sauce'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Tropico Apricot',
                icon: 'img/lettuce.png',
                ingredients: [
                    {icon: 'img/lettuce.png', text: '1 cup of lettuce'},
                    {icon: 'img/apricot.png', text: '1 can of apricots (in juice)'},
                    {icon: 'img/pineapple.png', text: '½ cup of pineapple'},
                    {icon: 'img/banana.png', text: '1 ripe banana'},
                    {icon: 'img/apricots.png', text: '½ cup of dried apricots'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Palm Tree',
                icon: 'img/alfalfa.png',
                ingredients: [
                    {icon: 'img/alfalfa.png', text: '1 cup of alfalfa'},
                    {icon: 'img/apricot.png', text: '2 apricots'},
                    {icon: 'img/pineapple.png', text: '½ pineapple'},
                    {icon: 'img/banana.png', text: '¼ cup of frozen yogurt'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Caprice',
                icon: 'img/basil.png',
                ingredients: [
                    {icon: 'img/basil.png', text: '½ cup of basil'},
                    {icon: 'img/grapes.png', text: '½ cup of green grapes'},
                    {icon: 'img/peach.png', text: '2 peaches'},
                    {icon: 'img/apricot.png', text: '2 apricots'},
                    {icon: 'img/orange.png', text: '½ cup of orange juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'A Plus',
                icon: 'img/alfalfa.png',
                ingredients: [
                    {icon: 'img/alfalfa.png', text: '1 cup of alfalfa'},
                    {icon: 'img/apple.png', text: '2 apples'},
                    {icon: 'img/apricot.png', text: '3 apricots'},
                    {icon: 'img/nuts.png', text: '2 tbsp of almonds (chopped)'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Kalefornia',
                icon: 'img/kale.png',
                ingredients: [
                    {icon: 'img/kale.png', text: '1 handful of kale'},
                    {icon: 'img/orange.png', text: '3 oranges'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Sour Banana',
                icon: 'img/swisschard.png',
                ingredients: [
                    {icon: 'img/swisschard.png', text: '1 handful of chard'},
                    {icon: 'img/pear.png', text: '1 pear'},
                    {icon: 'img/banana.png', text: '1 ripe banana'},
                    {icon: 'img/lemon.png', text: '1 cup of lemon juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Angry Ape',
                icon: 'img/mustard.png',
                ingredients: [
                    {icon: 'img/mustard.png', text: '1 mustard leaf'},
                    {icon: 'img/pineapple.png', text: '2 cups of pineapple'},
                    {icon: 'img/banana.png', text: '1 ripe banana'},
                    {icon: 'img/nuts.png', text: '3 tbsp of almonds'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Green Tofu',
                icon: 'img/broccoli.png',
                ingredients: [
                    {icon: 'img/broccoli.png', text: '1 broccoli'},
                    {icon: 'img/mango.png', text: '1 mango'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/apricot.png', text: '½ cup of apricots'},
                    {icon: 'img/tofu.png', text: '½ cup of tofu'},
                    {icon: 'img/juice.png', text: '½ cup of apricot or peach juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Berry Heaven',
                icon: 'img/greens.png',
                ingredients: [
                    {icon: 'img/greens.png', text: '½ cup of spring greens'},
                    {icon: 'img/berries.png', text: '½ cup of raspberries'},
                    {icon: 'img/strawberry.png', text: '½ cup of strawberries'},
                    {icon: 'img/berries.png', text: '½ cup of blueberries'},
                    {icon: 'img/berries.png', text: '½ cup of blackberries'},
                    {icon: 'img/juice.png', text: '1 cup of raspberry juice'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Green Dillemma',
                icon: 'img/dill.png',
                ingredients: [
                    {icon: 'img/dill.png', text: '1 cup of dill'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/berries.png', text: '½ cup of frozen blueberries'},
                    {icon: 'img/berries.png', text: '½ cup of frozen blackberries'},
                    {icon: 'img/orange.png', text: '1 cup of orange juice'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Black Pine',
                icon: 'img/parsley.png',
                ingredients: [
                    {icon: 'img/parsley.png', text: '1 tbsp of fresh parsley'},
                    {icon: 'img/pineapple.png', text: '1 cup of pineapple juice'},
                    {icon: 'img/berries.png', text: '½ cup of blueberries'},
                    {icon: 'img/berries.png', text: '½ cup of blackberries'},
                    {icon: 'img/berries.png', text: '½ cup of raspberries'},
                    {icon: 'img/lemon.png', text: '2 tbsp of lemon juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Soul Food',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '1 cup of spinach'},
                    {icon: 'img/apple.png', text: '2 apples'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/berries.png', text: '½ cup of blackberries'},
                    {icon: 'img/yogurt.png', text: '½ cup of yogurt'},
                    {icon: 'img/honey.png', text: '2 tbsp of honey'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Green It Away',
                icon: 'img/rocket.png',
                ingredients: [
                    {icon: 'img/rocket.png', text: '1 handful of rocket salad (arugula)'},
                    {icon: 'img/pineapple.png', text: '1 cup of pineapple'},
                    {icon: 'img/banana.png', text: '1 ripe banana'},
                    {icon: 'img/berries.png', text: '½ cup of blueberries'},
                    {icon: 'img/berries.png', text: '½ cup of blackberries'},
                    {icon: 'img/berries.png', text: '½ cup of raspberries'},
                    {icon: 'img/honey.png', text: '2 tbsp of honey'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Green Fairy',
                icon: 'img/lettuce.png',
                ingredients: [
                    {icon: 'img/lettuce.png', text: '1 handful of lettuce'},
                    {icon: 'img/grapes.png', text: '1 cup of red grapes'},
                    {icon: 'img/banana.png', text: '1 ripe banana'},
                    {icon: 'img/berries.png', text: '1 cup of blueberries'},
                    {icon: 'img/berries.png', text: '1 cup of cranberry juice'},
                    {icon: 'img/berries.png', text: '1 cup of raspberry juice'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Cherry Blues',
                icon: 'img/greens.png',
                ingredients: [
                    {icon: 'img/greens.png', text: '1 handful of any baby greens'},
                    {icon: 'img/cherry.png', text: '1 cup of cherries'},
                    {icon: 'img/grapes.png', text: '1 cup of red grapes'},
                    {icon: 'img/berries.png', text: '½ cup of blueberries'},
                    {icon: 'img/yogurt.png', text: '¼ cup of yogurt'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Sombrero',
                icon: 'img/cucumber.png',
                ingredients: [
                    {icon: 'img/cucumber.png', text: '1 cucumber'},
                    {icon: 'img/watermelon.png', text: '1 cup of watermelon'},
                    {icon: 'img/tomato.png', text: '1 tomato'},
                    {icon: 'img/orange.png', text: '1 orange'},
                    {icon: 'img/cayenne.png', text: '¼ inch of hot pepper (jalapeno, cayenne...)'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Cherry Picker',
                icon: 'img/dandelion.png',
                ingredients: [
                    {icon: 'img/dandelion.png', text: '3 dandelion leaves'},
                    {icon: 'img/cherry.png', text: '1 cup of cherries'},
                    {icon: 'img/banana.png', text: '1 banana (ripe)'},
                    {icon: 'img/berries.png', text: '¼ cup of blueberries'},
                    {icon: 'img/nuts.png', text: '2 tbsp of almonds'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Jubilee Smoothie',
                icon: 'img/coriander.png',
                ingredients: [
                    {icon: 'img/coriander.png', text: '1 cup of coriander (cilantro)'},
                    {icon: 'img/cherry.png', text: '1 cup of cherries'},
                    {icon: 'img/pineapple.png', text: '1 cup of pineapple'},
                    {icon: 'img/banana.png', text: '½ banana'},
                    {icon: 'img/seed.png', text: '1 tbsp flax seeds'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Sweet Sunrise',
                icon: 'img/mint.png',
                ingredients: [
                    {icon: 'img/mint.png', text: '1 sprig of mint'},
                    {icon: 'img/cherry.png', text: '1 cup of cherries'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/strawberry.png', text: '6 strawberries'},
                    {icon: 'img/grapefuit.png', text: '1 grapefuit'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Smoothie Lift',
                icon: 'img/romainlettuce.png',
                ingredients: [
                    {icon: 'img/romainlettuce.png', text: '1 handful of romain lettuce'},
                    {icon: 'img/cherry.png', text: '1 cup of cherries'},
                    {icon: 'img/orange.png', text: '1 orange'},
                    {icon: 'img/strawberry.png', text: '12 strawberries'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Goosebump Cocktail',
                icon: 'img/nettle.png',
                ingredients: [
                    {icon: 'img/nettle.png', text: '1 cup of nettle'},
                    {icon: 'img/grapefruit.png', text: '1 grapefruit'},
                    {icon: 'img/orange.png', text: '1 orange'},
                    {icon: 'img/berries.png', text: '1 cup of gooseberries'},
                    {icon: 'img/ginger.png', text: '½ inch of ginger'},
                    {icon: 'img/nuts.png', text: '1 tbsp of almonds'},
                    {icon: 'img/yogurt.png', text: '¼ cup plain or frozen yogurt'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Blend It Again Sam',
                icon: 'img/parsley.png',
                ingredients: [
                    {icon: 'img/parsley.png', text: '½ cup of parsley'},
                    {icon: 'img/grapefruit.png', text: '½ grapefruit'},
                    {icon: 'img/orange.png', text: '2 oranges'},
                    {icon: 'img/berries.png', text: '¼ cup of cranberry juice'},
                    {icon: 'img/lime.png', text: '1 lime'},
                    {icon: 'img/honey.png', text: '1 tbsp of honey'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Blitzkrieg',
                icon: 'img/rocket.png',
                ingredients: [
                    {icon: 'img/rocket.png', text: '1 cup of rocket salad (arugula)'},
                    {icon: 'img/grapefruit.png', text: '½ grapefruit'},
                    {icon: 'img/orange.png', text: '1 orange'},
                    {icon: 'img/kiwi.png', text: '2 kiwis'},
                    {icon: 'img/lemon.png', text: '1 lemon'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Hot Tango',
                icon: 'img/greens.png',
                ingredients: [
                    {icon: 'img/greens.png', text: '1 cup of any baby greens'},
                    {icon: 'img/orange.png', text: '3 tangerines'},
                    {icon: 'img/melon.png', text: '¼ honeydew melon'},
                    {icon: 'img/strawberry.png', text: '6 strawberries'},
                    {icon: 'img/ginger.png', text: '½ inch of ginger'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Calm Mandarin',
                icon: 'img/broccoli.png',
                ingredients: [
                    {icon: 'img/broccoli.png', text: '1 cup of broccoli'},
                    {icon: 'img/orange.png', text: '3 mandarines'},
                    {icon: 'img/grapes.png', text: '1 cup of red grapes'},
                    {icon: 'img/lemon.png', text: '2 tbsp of lemon juice'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Fruta Amarillo',
                icon: 'img/lettuce.png',
                ingredients: [
                    {icon: 'img/lettuce.png', text: '1 cup of lettuce'},
                    {icon: 'img/grapefruit.png', text: '1 grapefruit'},
                    {icon: 'img/grapes.png', text: '½ cup of white grapes'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/pineapple.png', text: '2 cups of pineapple'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Pineberry Apple',
                icon: 'img/coriander.png',
                ingredients: [
                    {icon: 'img/coriander.png', text: '½ cup of coriander (cilantro)'},
                    {icon: 'img/berries.png', text: '¼ cup of cranberries'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/pineapple.png', text: '2 cups of pineapple'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Apple Seed',
                icon: 'img/romainlettuce.png',
                ingredients: [
                    {icon: 'img/romainlettuce.png', text: '1 cup of romain lettuce'},
                    {icon: 'img/apple.png', text: '2 apples'},
                    {icon: 'img/orange.png', text: '1 orange'},
                    {icon: 'img/berries.png', text: '¼ cup of cranberries'},
                    {icon: 'img/seed.png', text: '1 tbsp of flax seeds'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Center of the Sun',
                icon: 'img/kale.png',
                ingredients: [
                    {icon: 'img/kale.png', text: '1 cup of kale'},
                    {icon: 'img/orange.png', text: '2 oranges'},
                    {icon: 'img/berries.png', text: '1 cup of dried cranberries'},
                    {icon: 'img/ginger.png', text: '2 tsp of ginger root'},
                    {icon: 'img/tofu.png', text: '¼ cup of tofu'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Frutalicious Veggy',
                icon: 'img/broccoli.png',
                ingredients: [
                    {icon: 'img/broccoli.png', text: '3 broccoli'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/berries.png', text: '¼ cup of dried cranberries'},
                    {icon: 'img/strawberry.png', text: '5 frozen strawberries'},
                    {icon: 'img/melon.png', text: '¼ cantaloupe melon'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Smoothie Splash',
                icon: 'img/spinach.png',
                ingredients: [
                    {icon: 'img/spinach.png', text: '1 handful of spinach'},
                    {icon: 'img/grapefruit.png', text: '1 grapefruit'},
                    {icon: 'img/berries.png', text: '¼ cup of cranberries'},
                    {icon: 'img/berries.png', text: '½ cup of frozen raspberries'},
                    {icon: 'img/melon.png', text: '¼ cantaloupe melon'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Blind Date',
                icon: 'img/fennel.png',
                ingredients: [
                    {icon: 'img/fennel.png', text: '1 fennel bulb'},
                    {icon: 'img/banana.png', text: '1 banana'},
                    {icon: 'img/date.png', text: '½ cup of dates'},
                    {icon: 'img/nuts.png', text: '2 tbsp of chopped almonds'},
                    {icon: 'img/yogurt.png', text: '½ cup of strawberry flavoured yogurt'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Smoothie Flirt',
                icon: 'img/swisschard.png',
                ingredients: [
                    {icon: 'img/swisschard.png', text: '2 chard leaves'},
                    {icon: 'img/orange.png', text: '1 orange'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/date.png', text: '½ cup of dates'},
                    {icon: 'img/berries.png', text: '¼ cup of chopped cranberries'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Fruity Ale',
                icon: 'img/lettuce.png',
                ingredients: [
                    {icon: 'img/lettuce.png', text: '2 lettuce leaves'},
                    {icon: 'img/apple.png', text: '1 apple'},
                    {icon: 'img/fig.png', text: '¼ cup of chopped figs'},
                    {icon: 'img/apricot.png', text: '¼ cup of chopped apricots'},
                    {icon: 'img/peach.png', text: '½ cup of chopped peaches'},
                    {icon: 'img/plum.png', text: '½ cup of plums'},
                    {icon: 'img/ginger.png', text: '¼ inch of ginger'},
                    {icon: 'img/water.png', text: '2 cups of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            },
            {
                name: 'Green Glacier',
                icon: 'img/nettle.png',
                ingredients: [
                    {icon: 'img/nettle.png', text: '½ cup of nettle'},
                    {icon: 'img/mint.png', text: '1 sprig of mint'},
                    {icon: 'img/grapes.png', text: '2 cups of red grape'},
                    {icon: 'img/avocado.png', text: '1 avocado'},
                    {icon: 'img/plum.png', text: '½ cup of plums'},
                    {icon: 'img/icecube.png', text: '½ cup of ice cubes'},
                    {icon: 'img/water.png', text: '1 cup of water'}],
                procedure: 'Blend all ingredients until smooth',
                servings: 'Servings: 2 cups'
            }
        ];

        for (var i = 0; i < recipes.length; i++) {
            recipes[i].index = i;
        }

    return {
        getById: function (id) {
            return recipes[id];
        },
        get: function (query) {
            console.log('GET RECIPES');
            if (query === undefined || query.length < 3) return recipes;
            
            var out = [];
            var count = 0;
            var keys = query.split(' ');

            console.log('start new');
            for (var j = 0; j < recipes.length; j++) {
                //console.log(keys.length);
                for (var i = 0; i < keys.length; i++) {
                    if (recipes[j].name.toLowerCase().indexOf(keys[i]) != -1) {
                        //out.push(input[j]);
                        //console.log('naslov: ' + input[j].name);
                        count++;
                        continue;
                    }
                    for (var x = 0; x < recipes[j].ingredients.length; x++) {
                        //console.log(input[j].name);
                        if (recipes[j].ingredients[x].text.toLowerCase().indexOf(keys[i]) != -1) {
                            //out.push(input[j]);
                            //console.log('ingred: ' + input[j].name);
                            count++;
                            break;
                        }
                    }
                    //if (found == true) break;
                }
                if (count == keys.length) {
                    out.push(recipes[j]);
                }
                count = 0;
            }
            return out;
        }
    };
});