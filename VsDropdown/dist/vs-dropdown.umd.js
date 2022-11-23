(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(":root{--primary-color: #1f73b7;--background-color: #1f73b714;--border: 1px solid #d8dcde;--max-width: 10000000px;--box-shadow: rgb(31 115 183 / 35%) 0px 0px 0px 3px;--bezier-curve: .1s cubic-bezier(0, 0, .95, 1.03);--animation-delay: .2s}html{overflow-y:auto}.margin-0-auto{margin:0 auto}.v-tree-dropdown{position:relative;width:300px;max-width:var(--max-width);outline:none}.v-dd{display:flex;flex-direction:column;row-gap:.5rem}.v-tree-dropdown #v-dd-label,.v-dd-option>.label{font-weight:600}.v-dd:hover .v-dd-search{border-color:var(--primary-color)}.v-dd-search{position:relative;display:flex;align-items:center;justify-content:space-between;border:var(--border);padding:.8rem .75rem;border-radius:4px;cursor:pointer;outline:none;z-index:1}.v-dd-search:active,.v-dd-search:focus,.v-dd-search:focus-within{border-color:var(--primary-color);box-shadow:var(--box-shadow);transition:border-color .2s ease-in-out,box-shadow .2s ease-in-out}.v-dd-search>svg{position:absolute}.v-dd-search>svg[aria-labelledby=zd-search]{left:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer]{right:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer].open{transform:rotate(180deg);transition:transform .2s ease-in-out}.v-dd-search>svg[aria-labelledby=zd-down-pointer].close{transform:rotate(0);transition:transform .2s ease-in-out}.v-dd-search>input,.v-dd-search>div{height:1.25rem;line-height:1.25rem;flex-grow:1;padding:0 2rem}.v-dd-input{border:none;outline:none}.v-dd-input.hide{position:absolute;width:0px;height:1px;padding:0}ul#v-dd-options-menu{position:absolute;display:flex;flex-direction:column;top:calc(100% + 5px);left:0;width:100%;max-height:500px;border:var(--border);border-radius:4px;background-color:#fff;z-index:1;padding:.25rem 0;max-height:350px;overflow-y:auto;box-shadow:#17494d26 0 20px 30px;animation:v-dd-menu-open var(--bezier-curve) 0s 1 normal;transition:display var(--bezier-curve)}#v-dd-options-menu>li{position:relative;display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:.5rem 1.25rem}li.v-dd-option>svg[aria-labelledby=zd-check],li.v-dd-option>svg[aria-labelledby=zd-contains]{position:absolute}.v-dd-option>span{padding:0 2rem;flex-grow:1}.v-dd-option.no-data{user-select:none;-webkit-user-select:none;pointer-events:none}.v-dd-option>svg[aria-labelledby=zd-down-pointer]{position:absolute;right:1rem;transform:rotate(-90deg)}.v-dd-option:hover,.v-dd-option:focus,.v-dd-option.active{background-color:var(--background-color)}.v-dd-option.parent-option{border-bottom:var(--border);padding:.5rem .75rem}.v-dd-option.parent-option>svg{left:.75rem;transform:rotate(90deg)}@keyframes v-dd-menu-open{0%{transform:translateY(2px)}to{transform:translateY(0)}}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
(function(l,o){typeof exports=="object"&&typeof module<"u"?module.exports=o():typeof define=="function"&&define.amd?define(o):(l=typeof globalThis<"u"?globalThis:l||self,l.VsDropdown=o())})(this,function(){"use strict";const o={template:`
  <svg 
    class="c-btn__icon" 
    :color="color"
    :role="role"
    :aria-labelledby="icon"
    :focusable="focusable"
    :aria-hidden="!focusable">
    <title :id="name || icon" >{{ name || icon }} Icon</title>
    <desc>{{ iconDescription || name }}</desc>
    <use :href="'./index.svg#' + icon">
  </use>
  </svg>
`,props:{icon:{type:String,default:""},color:{type:String},role:{type:String,default:"presentation"},iconDescription:{type:String,default:""},name:{type:String,default:""},focusable:{type:Boolean,default:!1}}},p="",c={template:`
 <div class="v-tree-dropdown" ref="dropdown">
   <div class="v-dd">
     <label for="v-dd-search__input" id="v-dd-label">{{ label }}</label>
     <div
       :class="'v-dd-search'+(menuIsOpen ? ' active': '')"
       @click="toggleDropdownMenu"
       aria-haspopup="listbox"
       :aria-expanded="''+menuIsOpen"
       aria-owns="v-dd-options-menu"
       aria-labelledby="v-dd-label"
     >
       <svg-icon icon="zd-search" name="Search" />
       <input
         ref="searchInput"
         type="text"
         autocomplete="off"
         id="v-dd-search__input"
         :class="'c-txt v-dd-input'+(!menuIsOpen ? ' hide': '')"
         v-model="searchInput"
         @click="keepMenuOpen"
         @keyup="handleKeyUp"
         role="combobox"
         aria-labelledby="v-dd-label"
         aria-autocomplete="list"
         :aria-controls="menuIsOpen ? 'v-dd-options-menu' : false"
         :aria-activedescendant="menuIsOpen ? ('v-dd-option-'+selectedIndex) : false"
       />
       <div
         v-show="!menuIsOpen"
         class="c-txt u-truncate"
         v-html="selectedOptions.map(option => option.label).join(', ')"
       ></div>
       <svg-icon icon="zd-down-pointer" :name="menuIsOpen ? 'Up arrow' : 'Down arrow'" :class="menuIsOpen ? 'open' : 'close'"/>
     </div>
   </div>
   <ul 
     ref="menu"
     id="v-dd-options-menu"
     v-show="menuIsOpen"
     role="listbox"
     aria-labelledby="v-dd-label"
     :aria-multiselectable="!!multiple"
   >
     <li class="v-dd-option no-data" v-if="!currentOptions?.length" role="option">
       <span>No options found.</span>
     </li>
     <li
       v-if="selectedParent"
       id="v-dd-option-0"
       :class="'v-dd-option parent-option'+ (selectedIndex === 0 ? ' active': '')"
       @click="goToPreviousOptions()"
       role="option"
     >
       <svg-icon icon="zd-down-pointer" name="Left arrow" iconDescription="Click to go back to previous menu" :focusable="true" color="#1f73b7" />
       <span class="u-truncate label">{{ selectedParent.label }}</span>
     </li>
     <li 
       v-for="(option, index) in currentOptions"
       :key="option.label"
       :id="'v-dd-option-'+(selectedParent ? index+1 : index)"
       :class="'v-dd-option'+ (selectedIndex === (selectedParent ? index+1 : index) ? ' active' : '')"
       @click="selectOption(index)"
       role="option"
       :aria-selected="selectedIndex === (selectedParent ? index+1 : index) ? true : false"
     >
       <svg-icon icon="zd-contains" name="Contains" color="#1f73b7" v-if="option.children?.length && hasSelectedOptions(option.children, option)" />
       <svg-icon icon="zd-check" name="Selected" color="#1f73b7" v-if="!option.children?.length && isOptionSelected(option)" />
       <span class="u-truncate">{{ option.label }}</span>
       <svg-icon icon="zd-down-pointer" name="Right arrow" iconDescription="Click to open sub-menu options" v-if="option.children?.length" />
     </li>
   </ul>
 </div>`,components:{SvgIcon:o},props:{label:{type:String,required:!1},options:{type:Array,default:[],required:!0},value:{type:Array,default:[],required:!0},multiple:{type:Boolean,default:!1,required:!1},delimiter:{type:String,default:", ",required:!1}},data(){return{searchInput:"",menuIsOpen:!1,selectedParent:null,selectedOptions:[],currentOptions:this.options,filteredOptions:this.options,selectedIndex:-1,selectedIndices:[],currentIndex:-1}},watch:{menuIsOpen(){this.menuIsOpen?document.addEventListener("click",this.closeDropdownMenuOnBlur):document.removeEventListener("click",this.closeDropdownMenuOnBlur)},searchInput(){this.searchInput?this.currentOptions=this.filterMatchingOptions(this.searchInput,this.options):this.currentOptions=this.options,this.filteredOptions=this.currentOptions,this.selectedParent=null},selectedOptions(){this.$emit("input",this.selectedOptions)}},methods:{focusSearchInput(){this.$refs.searchInput.focus()},toggleDropdownMenu(t){t.stopPropagation(),this.menuIsOpen=!this.menuIsOpen,this.focusSearchInput()},closeDropdownMenu(){var t;this.menuIsOpen=!1,(t=this.searchInput)!=null&&t.trim().length||(this.searchInput="",this.selectedParent=null,this.filteredOptions=this.options,this.currentOptions=this.options,this.selectedIndex=-1)},keepMenuOpen(t){t.stopPropagation(),this.menuIsOpen||(this.menuIsOpen=!0),this.focusSearchInput()},closeDropdownMenuOnBlur(t){t.path.includes(this.$refs.dropdown)||this.closeDropdownMenu()},optionIdentifer(t,e=this.selectedParent){return[e==null?void 0:e.value,t.label,t.value].join("__")},isOptionSelected(t,e){const i=this.optionIdentifer(t,e);return this.selectedOptions.findIndex(s=>s.__identifier===i)>-1},hasSelectedOptions(t,e){return t.some(i=>{var s;return(s=i.children)!=null&&s.length?this.hasSelectedOptions(i.children,i):this.isOptionSelected(i,e)})},goToPreviousOptions(t=null,e=this.filteredOptions){var i;for(const s of e)if((i=s.children)!=null&&i.length){if(s.label===this.selectedParent.label&&s.children.length===this.currentOptions.length){this.currentOptions=e,this.selectedParent=t;return}this.goToPreviousOptions(s,s.children)}},filterMatchingOptions(t,e){var s;let i=[];for(const n of e)if(n.label.toLowerCase().includes(t.toLowerCase()))i.push(n);else if((s=n.children)!=null&&s.length){const d=this.filterMatchingOptions(t,n.children);d.length&&i.push({...n,children:d})}return i},selectOption(t){var i;const e=this.currentOptions[t];if((i=e.children)!=null&&i.length)this.selectedParent=e,this.currentOptions=e.children;else{const s=this.optionIdentifer(e);if(e.selected){if(this.multiple){const n=this.selectedOptions.findIndex(d=>d.__identifier===s);this.selectedOptions.splice(n,1)}else this.selectedOptions=[];this.currentOptions[t].selected=!1}else{const n={...e,__identifier:s};this.multiple?this.selectedOptions.push(n):(this.selectedOptions=[n],this.closeDropdownMenu()),this.currentOptions[t].selected=!0}}},handleKeyUp(t){var i,s;const{key:e}=t;if(console.log("key ",e),e==="Escape")this.closeDropdownMenu();else if(e==="Enter"||e.length===1){if(this.menuIsOpen||this.keepMenuOpen(t),e==="Enter"){if(this.selectedParent&&this.selectedIndex===0)this.goToPreviousOptions(),this.selectedIndex=0;else if(this.selectedIndex!==-1){const n=this.selectedParent?this.selectedIndex-1:this.selectedIndex;this.selectOption(n),this.selectedParent?this.selectedIndex=1:this.selectedIndex=0}}}else if(e==="ArrowUp")if(this.selectedIndex===0){const n=this.currentOptions.length;this.selectedIndex=this.selectedParent?n:n-1}else this.selectedIndex--;else if(e==="ArrowRight"){const n=this.selectedParent?this.selectedIndex-1:this.selectedIndex;(s=(i=this.currentOptions[n])==null?void 0:i.children)!=null&&s.length&&(this.selectOption(n),this.selectedParent&&(this.selectedIndex=1))}else if(e==="ArrowDown"){const n=this.currentOptions.length;this.selectedIndex===(this.selectedParent?n:n-1)?this.selectedIndex=0:this.selectedIndex++}else e==="ArrowLeft"&&this.selectedParent&&(this.goToPreviousOptions(),this.selectedIndex=0)}}},r={install:(t,e)=>{t.component("VsDropdown",c)}};return typeof window<"u"&&window.Vue&&window.Vue.use(c),r});
