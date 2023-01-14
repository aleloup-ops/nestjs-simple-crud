"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBookInput = void 0;
const create_book_input_1 = require("./create-book.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateBookInput = class UpdateBookInput extends (0, graphql_1.PartialType)(create_book_input_1.CreateBookInput) {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Book\'s id' }),
    __metadata("design:type", String)
], UpdateBookInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Book\'s name' }),
    __metadata("design:type", String)
], UpdateBookInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Book\'s author' }),
    __metadata("design:type", String)
], UpdateBookInput.prototype, "author", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Book\'s description' }),
    __metadata("design:type", String)
], UpdateBookInput.prototype, "description", void 0);
UpdateBookInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateBookInput);
exports.UpdateBookInput = UpdateBookInput;
//# sourceMappingURL=update-book.input.js.map